import Head from "next/head";
import tw from "twin.macro";

const Container = tw.div`container mx-auto px-gutter-1/2`;
const Grid = {
  Row: ({ nowrap, ...rest }) => (
    <div
      css={[
        tw`relative flex -mx-gutter-1/2`,
        nowrap ? tw`flex-nowrap` : tw`flex-wrap`,
      ]}
      {...rest}
    />
  ),
  Column: ({ flex, ...rest }) => (
    <div
      css={[tw`relative p-gutter-1/2`, flex ? tw`flex` : tw`block`]}
      {...rest}
    />
  ),
};
// const Container = styled.div(({ tw }) => [tw`container mx-auto p-2 ${tw}`]);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <h1>Title</h1>
          <Grid.Row>
            <Grid.Column>Some info in a column</Grid.Column>
          </Grid.Row>
        </Container>
      </main>
      <footer>
        <div tw="container mx-auto">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/vercel.svg" alt="Vercel Logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}
