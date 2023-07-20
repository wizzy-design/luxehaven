// This is a file that makes the Bonky Serif font global
// File to globalize Bonky Font
import { createGlobalStyle } from "styled-components";

const Font = createGlobalStyle`
    @font-face {
        font-family: "Bonky free personal use";
        src: url("https://db.onlinewebfonts.com/t/40cc9bfbcbb188f616038108914517a0.eot");
        src: url("https://db.onlinewebfonts.com/t/40cc9bfbcbb188f616038108914517a0.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/40cc9bfbcbb188f616038108914517a0.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/40cc9bfbcbb188f616038108914517a0.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/40cc9bfbcbb188f616038108914517a0.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/40cc9bfbcbb188f616038108914517a0.svg#Bonky free personal use")format("svg");
    }
`;

export default Font;
