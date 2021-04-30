import React, { Component } from "react";
import Header from "./components/Homepage/Header";
import Instructions from "./components/Homepage/Instructions";
import Blog from "./components/Homepage/Blog";
import Footer from "./components/Homepage/Footer";
import UploadPopup from "./components/Popup/UploadPopup";
import ResultPage from "./components/ResultPage/ResultPage";
import * as tf from '@tensorflow/tfjs';

class Homepage extends Component {

  state = {
    showTryNow: false,
    showPrediction: false,
    image: null,
    tfModel: null,
    labels: null
  }

  async componentDidMount() {

    let response = await fetch('https://coverimages.blob.core.windows.net/plantai-tfjs-model/class_indices.json');
    let labels = await response.json();
    labels = JSON.stringify(labels);
    labels = JSON.parse(labels);

    let tfModel = await tf.loadLayersModel('https://coverimages.blob.core.windows.net/plantai-tfjs-model/model.json');

    this.setState({
      labels,
      tfModel
    })
  }

  tryNowClickHandler = () => {
    this.setState({
      showTryNow: true
    })
  }

  tryNowCloseHandler = () => {
    this.setState({
      showTryNow: false
    })
  }

  resultPageCloseHandler = () => {
    this.setState({
      showPrediction: false,
      image: null,
    })
  }

  tryAnotherClickHandler = () => {
    this.setState({
      showPrediction: false,
      image: null,
      showTryNow: true
    })
  }

  imageSelectHandler = async (image) => {

    const base64 = await new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function (error) {
        reject(error);
      };

    });

    this.setState({
      showTryNow: false,
      showPrediction: true,
      image: base64
    })

  }

  predictDisease = async () => {
    while (!this.state.tfModel) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 500)
      })
    }
    let img = document.getElementById('plant-photo')

    let offset = tf.scalar(255)
    let tensorImg = tf.browser.fromPixels(img).resizeNearestNeighbor([224, 224]).toFloat().expandDims();
    let tensorImg_scaled = tensorImg.div(offset)
    let prediction = await this.state.tfModel.predict(tensorImg_scaled).data();

    let predicted_class = tf.argMax(prediction)
    let class_idxs = Array.from(predicted_class.dataSync());

    const diseases = [];

    for (const class_idx of class_idxs) {
      const predictedDisease = this.state.labels[class_idx];
      let [name, disease] = predictedDisease.split('___');
      name = name.replaceAll('_', ' ');
      disease = disease.replaceAll('_', ' ');
      diseases.push({
        name,
        disease,
        image: `https://coverimages.blob.core.windows.net/disease-cover-images/${predictedDisease}.JPG`,
        cureURL: encodeURI(`https://www.google.com/search?q=How to cure ${disease} in ${name}`)
      })
    }

    return diseases;
  }

  render() {

    if (this.state.showTryNow) {
      return (
        <UploadPopup onClose={this.tryNowCloseHandler}
          onCapture={this.imageSelectHandler} />
      )
    }

    if (this.state.showPrediction) {
      return (
        <ResultPage image={this.state.image}
          getDiseases={this.predictDisease}
          onTryAnotherClick={this.tryAnotherClickHandler}
          onClose={this.resultPageCloseHandler} />
      )
    }

    return (
      <>
        <Header onTryNowClick={this.tryNowClickHandler} />
        <Instructions id="instructions" />
        <Blog id="blog" />
        <Footer />

      </>
    );
  }

};

export default Homepage;
