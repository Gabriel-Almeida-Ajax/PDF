import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { backgroundColor: 'tomato' },
  section: { color: 'white', textAlign: 'center', margin: 30 }
});

export const MyPdf = () => {
  return (
    <Document>
      <Page style={styles.page} size="A4">
        {
          Array.from(Array(10).keys())
            .map((i) => (
            <View style={styles.section}>
              <Text>Marcão {i}</Text>
            </View>))
        }
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
