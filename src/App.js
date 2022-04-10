import "./styles.css";
import { MyPdf } from "./pdf";
import { PDFDownloadLink, BlobProvider } from "@react-pdf/renderer";

export default function App() {
  return (
    <div className="App">
      <h1>React PDF GEN</h1>
      <BlobProvider document={MyPdf}>
        {({ blob, url, loading, error }) => {
          // Do whatever you need with blob here
          return <div>There's something going on on the fly</div>;
        }}
      </BlobProvider>
      <PDFDownloadLink document={<MyPdf />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => {
          console.log({ blob, url, loading, error });
          return loading ? "Loading document..." : "Download now!";
        }}
      </PDFDownloadLink>
    </div>
  );
}
