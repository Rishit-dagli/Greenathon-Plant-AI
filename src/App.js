import Homepage from "./Homepage";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCloudUploadAlt,
  faMobileAlt,
  faChevronRight,
  faList,
  faFolderOpen,
  faCamera,
  faImages,
  faWindowClose,
  faComments,
  faExclamationTriangle,
  faBolt,
  faSkull,
  faFirstAid,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCloudUploadAlt,
  faMobileAlt,
  faChevronRight,
  faList,
  faFolderOpen,
  faCamera,
  faImages,
  faWindowClose,
  faComments,
  faExclamationTriangle,
  faBolt,
  faSkull,
  faFirstAid,
  faPlusSquare
);

const App = () => {
  return (
    <>
      <Homepage />
    </>
  );
};

export default App;
