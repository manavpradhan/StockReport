import React from "react";
import "./report.css";
import SubReportBPS from "./SubReportBPS";
import SubReportWHS from "./SubReportWHS";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CardContent, Typography } from "@mui/material";
import SubReportARS from "./SubReportARS";
import SubReportTDS from "./SubReportTDS";
import SubReportTRS from "./SubReportTRS";

const Report = () => {
  return (
    <div className="report">
      <section className="report-summary">
        <h2>Top Stocks 2024 Report</h2>
        <p>
          This report provides an overview of top-performing stocks in 2024,
          based on various sources and criteria. We'll examine the best of the
          performing stocks, widely held stocks, top-ranked value stocks, top
          dividend stocks, and stocks with the highest analyst recommendations.
        </p>
      </section>
      <div className="report-section">
        <Card className="cards">
          <CardHeader
            className="cardTitle"
            title="Best-Performing Stocks in the S&P 500 Index (June 2024)"
          />
          <SubReportBPS />
          <CardContent className="cardContent">
            <Typography variant="p">
              The chart above shows the top 10 best-performing stocks in the S&P
              500 index as of June 2024. Super Micro Computer (SMCI) leads the
              pack with an impressive 176% gain, followed by Vistra (VST) at
              157.2% and Nvidia (NVDA) at 121.4%. These stocks have
              significantly outperformed the broader market, showcasing
              exceptional growth in their respective sectors.
            </Typography>
          </CardContent>
        </Card>
        <Card className="cards">
          <CardHeader
            className="cardTitle"
            title="Widely-Held Stocks in the S and P 500 Index (June 2024)"
          />
          <SubReportWHS />
          <CardContent className="cardContent">
            <Typography variant="p">
              This chart displays the performance of widely held stocks in the
              S&P 500 index. Notably, Nvidia (NVDA) stands out with a 121.4%
              gain, while other tech giants like Apple (AAPL), Microsoft (MSFT),
              Alphabet (GOOGL), and Amazon (AMZN) show more modest gains. Tesla
              (TSLA) has experienced a significant decline of 28.3% during this
              period.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="report-section">
        <Card className="cards">
          <CardHeader
            className="cardTitle"
            title="Top Stocks by Analyst Recommendation"
          />
          <SubReportARS />
          <CardContent className="cardContent">
            <Typography variant="p">
              This chart shows the top stocks based on analyst recommendations,
              with lower scores indicating stronger buy recommendations.
              Alexandria Real Estate Equities (ARE) has the strongest
              recommendation with a score of 1.17, closely followed by Zoetis
              (ZTS) at 1.18 and Amazon (AMZN) at 1.22. These stocks are highly
              favored by analysts, suggesting strong potential for future
              performance.
            </Typography>
          </CardContent>
        </Card>
        <Card className="cards">
          <CardHeader className="cardTitle" title="Top Dividend Stocks 2024" />
          <SubReportTDS />
          <CardContent className="cardContent">
            <Typography variant="p">
              This pie chart illustrates the dividend yields of the top dividend
              stocks for 2024. Realty Income Trust (O) and Healthpeak (DOC) lead
              with 6% dividend yields each, followed by Kraft Heinz (KHC) and
              U.S. Bank (USB) at 5% each. WEC Energy (WEC) rounds out the top
              five with a 4.25% dividend yield. These stocks offer attractive
              income potential for dividend-focused investors.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="report-section">
        <Card className="cards">
          <CardHeader
            className="cardTitle"
            title="Top-Ranked Classic Value Stocks 2024"
          />
          <SubReportTRS />
          <CardContent className="cardContent">
            <Typography variant="p">
              This chart presents the top-ranked classic value stocks for 2024,
              comparing their Forward P/E ratios, PEG ratios, and dividend
              yields. BASF SE (BASFY) offers a high dividend yield of 5.2%,
              while Ford Motor Company (F) has the lowest Forward P/E ratio at
              6.0. KB Home (KBH) shows a balanced profile with a low PEG ratio
              of 0.7.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Report;

// { function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height,
//   };
// }
// const [isMobile, setIsMobile] = useState(false);
// const [windowDimensions, setWindowDimensions] = useState(
//   getWindowDimensions()
// );
// //choose the screen size
// const setDevice = () => {
//   if (windowDimensions.width < 720) {
//     setIsMobile(true);
//     console.log("mobile");
//   } else {
//     setIsMobile(false);
//   }
// };
// useEffect(() => {
//   function handleResize() {
//     setWindowDimensions(getWindowDimensions());
//     setDevice();
//   }
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, [setDevice]);
/* <BarChart
            className="barChart"
            dataset={datasetBPS}
            xAxis={[
              {
                scaleType: `${isMobile ? "" : "band"}`,
                dataKey: `${isMobile ? "" : "stock"}`,
                label: `${isMobile ? "" : "Performance 2024 (%)"}`,
              },
            ]}
            yAxis={[
              {
                scaleType: `${isMobile ? "band" : ""}`,
                dataKey: `${isMobile ? "growth" : ""}`,
                label: `${isMobile ? "Performance 2024 (%)" : ""}`,
              },
            ]}
            series={[
              { dataKey: "growth", label: "Growth Factor", valueFormatter },
            ]}
            {...chartSetting}
            layout={`${isMobile ? "horizontal" : "vertical"}`}
          /> */
// }
