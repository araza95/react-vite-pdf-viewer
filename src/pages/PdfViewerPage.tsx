// React Imports
import { Fragment, FunctionComponent } from "react";

// PDF Imports
import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Assets
import pdf from "../sample.pdf";

const PdfViewer: FunctionComponent = () => {
  // Your render function
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
      fullScreenPlugin: {
        // Zoom to fit the screen after entering and exiting the full screen mode
        onEnterFullScreen: (zoom) => {
          zoom(SpecialZoomLevel.PageFit);
        },
        onExitFullScreen: (zoom) => {
          zoom(SpecialZoomLevel.PageFit);
        },
      },
    },
  });

  return (
    <Fragment>
      <div className=" h-full bg-primary">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div>
    </Fragment>
  );
};

export default PdfViewer;
