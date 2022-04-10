import { Document, Page, Text, View } from "@react-pdf/renderer";

export const MyPdf = () => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>Section #1</Text>
        </View>
        <View>
          <Text>Section #2</Text>
        </View>
      </Page>
      <Page wrap>
        <Text
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />

        <View
          render={({ pageNumber }) =>
            pageNumber % 2 === 0 && (
              <View style={{ background: "red" }}>
                <Text>I'm only visible in odd pages!</Text>
              </View>
            )
          }
        />
      </Page>
    </Document>
  );
};
