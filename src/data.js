import fuji from "./images/fuji.png";
import nyc from "./images/nyc.png";
import lake from "./images/lake.jpg";
const data = [
  {
    title: "Mount Fuji",
    location: "JAPAN",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    date: "week 1",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl: { fuji },
  },
  {
    title: "NEW YORK CITY",
    location: "NY",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    date: "week 2",
    description:
      "New York City, officially the City of New York, historically New Amsterdam, the Mayor, Alderman, and Commonality of the City of New York, and New Orange, byname the Big Apple, city and port located at the mouth of the Hudson River",
    imageUrl: { nyc },
  },
  {
    title: "Geirangerfjord",
    location: "NORWAY",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    date: "week 3",
    description:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    imageUrl: { lake },
  },
];

export default data;
