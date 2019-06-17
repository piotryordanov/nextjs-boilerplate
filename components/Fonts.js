import GoogleFontLoader from "react-google-font-loader";

export const Fonts = () => (
  <GoogleFontLoader
    fonts={[
      {
        font: "Roboto",
        weights: [400, "400i"]
      },
      {
        font: "Titillium Web",
        weights: [300, 400, 700]
      }
    ]}
    subsets={["cyrillic-ext", "greek"]}
  />
);
