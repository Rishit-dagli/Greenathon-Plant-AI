import React from "react";
import BlogPost from "./BlogPost";

const Blog = () => {
  return (
    <div className="blog" alt="">
      <BlogPost
        imgLink="https://images.unsplash.com/photo-1521334884684-d80222895322?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        
        blogTitle="Your plants need you!"
        blogBody="Human society needs to increase food production by an estimated 70% by 2050 to feed an expected population size that is predicted to be over 9 billion people. Currently, infectious diseases reduce the potential yield by an average of 40% with many farmers in the developing world experiencing yield losses as high as 100%!"
      />
      <BlogPost
        imgLink="https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        blogTitle="Act before it’s too late"
        blogBody="The widespread distribution of smartphones among crop growers around the world with an expected 5 billion smartphones by 2020 offers the potential of turning the smartphone into a valuable tool for diverse communities growing food. We allow you to diagnose plant disease with your smartphone."
      />
      <BlogPost
        imgLink="https://www.fao.org/fileadmin/user_upload/rne/img/medium_24785_AMM_24.jpg"
        blogTitle="AI Engine built for Jordan"
        blogBody="Shocks from climate change, along with pests and diseases, often prevent farmers from becoming profitable enterprises. One of the main problems is the lack of expert advice readily available to farmers. By applying The World of Plants we allow them to easily diagnose diseases on their current smartphones."
      />
    </div>
  );
};

export default Blog;
