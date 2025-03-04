// React Imports
import { Fragment, FunctionComponent } from "react";

// Layout Imports
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// PDF Imports
import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/search/lib/styles/index.css";

// Assets
import pdf from "../sample.pdf";
import { OnHighlightKeyword } from "@react-pdf-viewer/search";

const PdfViewer: FunctionComponent = () => {
  // Your render function
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
      searchPlugin: {
        keyword: ["example"],
        onHighlightKeyword: (props: OnHighlightKeyword) => {
          console.log({ props });
          props.highlightEle.style.outline = "2px dashed blue";
          props.highlightEle.style.backgroundColor = "rgba(0, 0, 0, .1)";
        },
      },
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
