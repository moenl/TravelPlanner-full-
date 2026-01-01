import france from "../assets/france.png"
import lebanon from "../assets/lebanon.png"
import emirates from "../assets/emirates.png"
import america from "../assets/america.png"
import japan from "../assets/japan.png"
import turkey from "../assets/turkey.png"
import paris from "../assets/paris.avif"
import dubai from "../assets/dubai.jpg"
import beirut from "../assets/beirut.webp"
import tokyo from "../assets/tokyo.avif"
import istanbul from "../assets/istanbul.webp"
import newyork from "../assets/new york.webp"

export const destinationsData = [
  {
    name: "Paris",
    country: "France",
    image: france,
    overviewImage:paris,
    description: "The city of love, art, and culture.",
    activities: [
      {name:"Visit the Eiffel Tower",image:"/images/eiffel.webp",mapLink: "https://www.google.com/maps/place/Eiffel+Tower/@48.8583736,2.2919064,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813!16zL20vMDJqODE?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"},
      {name:"Explore the Louvre Museum",image:"/images/meusum.jpg",mapLink: "https://www.google.com/maps/place/Louvre+Museum/@48.8606146,2.3350691,17z/data=!3m2!4b1!5s0x47f112d46c2f6eef:0xfb8a933f53aec2c6!4m6!3m5!1s0x47e671d877937b0f:0xb975fcfa192f84d4!8m2!3d48.8606111!4d2.337644!16zL20vMDRnZHI?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"},
      {name:"Cruise the Seine River",image:"/images/river.avif",mapLink:"https://www.google.com/maps/place/Seine/@48.5712171,-0.2534402,7z/data=!3m1!4b1!4m6!3m5!1s0x47edb722f69c5dc7:0x4a812c1e7a4bad61!8m2!3d48.6382687!4d2.4489006!16zL20vMGYzdno?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"}
    ],
    estimatedCosts: [
  { name: "Flight", cost: 700 },
  { name: "Hotel", cost: 500 },
  { name: "Food", cost: 200 },
  { name: "Transport", cost: 100 },
],

  },
  {
    name: "Tokyo",
    overviewImage:tokyo,
    country: "Japan",
    image: japan,
    description: "A city where tradition meets technology.",
    activities: [
      {name:"Shibuya Crossing",image:"/images/shibuya.jpg",mapLink:"https://www.google.com/maps/search/shibuya+crossing/@35.666855,139.6514165,13z?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"},
      {name:"Visit Senso-ji Temple",image:"/images/temple.jpg",mapLink:"https://www.google.com/maps/place/Sens%C5%8D-ji/@35.7141379,139.7937156,16z/data=!4m6!3m5!1s0x60188ec1a4463df1:0x6c0d289a8292810d!8m2!3d35.7147651!4d139.7966553!16zL20vMDNrOTg3?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"},
      {name:"Try authentic sushi",image:"/images/suchi.jpg",mapLink:"https://www.google.com/maps/place/Sushiro+-+Asakusa+Azumabashi/@35.7141796,139.7782658,14z/data=!3m1!5s0x60188ec582752319:0xb53bd36dbc565608!4m10!1m2!2m1!1sSushiro!3m6!1s0x60188f8ace6f6383:0xa3dac743f1f6ced5!8m2!3d35.709693!4d139.800954!15sCgdTdXNoaXJvIgOIAQFaCSIHc3VzaGlyb5IBF2Nhc3VhbF9zdXNoaV9yZXN0YXVyYW50mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU40ZGxwaU5FcG5FQUXgAQD6AQQIABBM!16s%2Fg%2F11ft8y4kdb?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"}
    ],
      estimatedCosts: [
  { name: "Flight", cost: 1000 },
  { name: "Hotel", cost: 600 },
  { name: "Food", cost: 200 },
  { name: "Transport", cost: 150 },
],

  
  },
  {
    name: "New York",
    country: "USA",
    image:america,
    overviewImage:newyork,
    description: "The city that never sleeps.",
    activities: [
      {name:"See Times Square",image:"/images/square.jpg",mapLink:"https://www.google.com/maps/place/Times+Square/@40.7579747,-73.9881175,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25855c6480299:0x55194ec5a1ae072e!8m2!3d40.7579747!4d-73.9855426!16zL20vMDdxZHI?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"},
      {name:"Walk in Central Park",image:"/images/park.jpg",mapLink:"https://www.google.com/maps/place/Central+Park/@40.7825695,-73.9840374,15z/data=!3m1!4b1!4m6!3m5!1s0x89c2589a018531e3:0xb9df1f7387a94119!8m2!3d40.7825547!4d-73.9655834!16zL20vMDljN3Y?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"},
      {name:"Visit the Statue of Liberty",image:"/images/statue.jpg",mapLink:"https://www.google.com/maps/place/Statue+of+Liberty/@40.6892534,-74.0470753,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25090129c363d:0x40c6a5770d25022b!8m2!3d40.6892494!4d-74.0445004!16zL20vMDcycDg?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"}
    ],
    estimatedCosts: [
  { name: "Flight", cost: 700 },
  { name: "Hotel", cost: 900 },
  { name: "Food", cost: 200 },
  { name: "Transport", cost: 300 },
],

  },
  {
    name: "Beirut",
    country: "Lebanon",
    image: lebanon, 
    overviewImage:beirut,
    description: "A Mediterranean city known for food, culture, and nightlife.",
    activities: [
      {name:"Walk along Zaitouna Bay",image:"/images/zaytuna.jpg",mapLink:"https://www.google.com/maps/place/Zaitunay+Bay/@33.9022445,35.4956256,17z/data=!3m1!4b1!4m6!3m5!1s0x151f16c2c5c430e5:0xa97c7dfbc9de573b!8m2!3d33.9022401!4d35.4982005!16s%2Fg%2F1hc0wnk4l?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"},
      {name:"Visit the National Museum",image:"/images/meusumB.webp",mapLink:"https://www.google.com/maps/place/National+Museum+of+Beirut/@33.8783789,35.5124516,17z/data=!3m1!4b1!4m6!3m5!1s0x151f1705bf01caff:0x241292ecea61d223!8m2!3d33.8783745!4d35.5150265!16s%2Fm%2F02qb0jc?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"},
      {name:"Explore Hamra Street cafés",image:"/images/hamra.jpg",mapLink:"https://www.google.com/maps/place/Hamra,+Beirut/@33.8966791,35.4780244,16z/data=!3m1!4b1!4m6!3m5!1s0x151f17283e7e3ced:0x740bcfc330ca9eb0!8m2!3d33.8966196!4d35.4823007!16s%2Fg%2F128dgghnm?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"}
    ],
    estimatedCosts: [
  { name: "Flight", cost: 700 },
  { name: "Hotel", cost: 500 },
  { name: "Food", cost: 200 },
  { name: "Transport", cost: 100 },
],

  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    image: emirates, 
    overviewImage:dubai, 
    description: "A luxury destination with futuristic skyscrapers and beaches.",
    activities: [
      {name:"Burj Khalifa observation deck",image:"/images/khalifa.jpg",mapLink:"https://www.google.com/maps/place/Burj+Khalifa/@25.1972018,55.2718015,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f43348a67e24b:0xff45e502e1ceb7e2!8m2!3d25.197197!4d55.2743764!16zL20vMDNjbjB2?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"},
      {name:"Desert safari",image:"/images/safari.jpg",mapLink:"https://www.google.com/maps/place/Desert+Safari+Dubai/@25.1926663,55.2619787,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f69ce4f49fcdd:0xeeec3cf5feee0a07!8m2!3d25.1926615!4d55.2645536!16s%2Fg%2F11dflbtpt_?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"},
      {name:"Dubai Mall and fountain show",image:"/images/dubaimall.avif",mapLink:"https://www.google.com/maps/place/Dubai+Mall/@25.1974476,55.274348,16z/data=!3m2!4b1!5s0x3e5f6829d585a26f:0xa2f9a6d6258c2d45!4m6!3m5!1s0x3e5f682829c85c07:0xa5eda9fb3c93b69d!8m2!3d25.1972295!4d55.279747!16zL20vMGJ4ZG40?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"}
    ],
   estimatedCosts: [
  { name: "Flight", cost: 700 },
  { name: "Hotel", cost: 500 },
  { name: "Food", cost: 400 },
  { name: "Transport", cost: 300 },
],

  },
  {
    name: "Istanbul",
    country: "Turkey",
    image: turkey,
    overviewImage:istanbul,
    description: "A historic city connecting Europe and Asia.",
    activities: [
      {name:"Visit Hagia Sophia",image:"/images/sophia.jpg",mapLink:"https://www.google.com/maps/place/Hagia+Sophia+Grand+Mosque/@41.008587,28.9776001,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab9be92011c27:0x236e6f6f37444fae!8m2!3d41.008583!4d28.980175!16zL20vMGJyNXE?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"},
      {name:"Grand Bazaar shopping",image:"/images/bazaar.jpg",mapLink:"https://www.google.com/maps/place/Grand+Bazaar/@41.0106888,28.9654932,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab99162d70527:0x64c8680b5ac198ab!8m2!3d41.0106848!4d28.9680681!16zL20vMDF5bV84?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"},
      {name:"Bosporus boat tour",image:"/images/tour.avif",mapLink:"https://www.google.com/maps/place/Bosphorus+Cruise+Tours+Istanbul/@41.0037383,28.9776192,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab9961966ae2d:0xa1fa1d5cf82b967b!8m2!3d41.0037343!4d28.9801941!16s%2Fg%2F11bzsdjhl9?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D/"}
    ],
    estimatedCosts: [
  { name: "Flight", cost: 700 },
  { name: "Hotel", cost: 500 },
  { name: "Food", cost: 200 },
  { name: "Transport", cost: 100 },
],

  }
];
