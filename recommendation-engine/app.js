require("@tensorflow/tfjs-node");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const Brain = require("./Brain");

const app = express();
const port = 3000;

const recEngine = new Brain();
// This prediction point is for testing purposes only
const defaultPredictionPoint = {
  accomodation_quality_wifi: 0.5,
  accomodation_quality_staff: 0.5,
  accomodation_quality_location: 0.5,
  accomodation_quality_price: 0.5,
  accomodation_quality_quiet: 0.5,
  accomodation_quality_breakfast: 0.5,
  accomodation_quality_cleanliness: 0.5
};

app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());

app.get("/train", (req, res) => {
  recEngine.train();
});

app.post("/suggestions", async (req, res) => {
  console.log(`Processing request with params ${JSON.stringify(req.body)}`);
  const { features } = req.body;

  const bestHotelMatches = await recEngine.suggest(
    features || defaultPredictionPoint
  );

  res.json(bestHotelMatches);
});

app.post("/learn", (req, res) => {
  const hotelId = Math.floor(Math.random() * Math.floor(100));
  //
  const outcome = 1;
  recEngine.learnFromUser(
    hotelId,
    {
      accomodation_quality_wifi: 0.5,
      accomodation_quality_staff: 0.5,
      accomodation_quality_location: 0.5,
      accomodation_quality_price: 0.5,
      accomodation_quality_quiet: 0.5,
      accomodation_quality_breakfast: 0.5,
      accomodation_quality_cleanliness: 0.5
    },
    outcome
  );
});

app.post("/train", async (req, res) => {
  await recEngine.train();

  res.json({ ok: "ok" });
});

// Start the recommendation engine and then the web server
recEngine.train().then(() => {
  app.listen(port, () =>
    console.log(`Recommendation Engine listening on port ${port}!`)
  );
});
