/**
 * menu_items Database can be added here.
 * You can add menu_items of your wish with different attributes
 * */

export const menu_items = [
  /* SUB CATEGORY : Fresh Vegetables */
  {
    _id: "1",
    name: "Cabbage (Patta Gobhi)",
    sub_category_id: "SC_1",
    benefits: [
      "Cabbage improves brain health and vision. Best for people who want to lose weight in a healthy way.",
      "It detoxifies the body and contains glutamine that reduces effects of inflammation, allergies, joint pain, irritation, fever.",
      " Cabbages also help prevent cancer.",
    ],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683919054/grocery/fresh_vegetables/1_dk4hoe.webp",
    rating: 4.0,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_1",
        unit: "1 piece (400 - 600 g)",
        price: 21,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "2",
    name: "Onion (Pyaz)",
    sub_category_id: "SC_1",
    benefits: [
      "If a piece of onion is inhaled, it can slow down or stop nose bleeding.",
      "Those who have sleeping disorders or insomnia can have a good night sleep if they have an onion every day.",
      "Onions are known to have antiseptic, antimicrobial and antibiotic properties which help you to get rid of infections.",
      "Onions are high in sulphur, vitamin B6 and B9. It has high quantities of water and naturally low in fat. It is high in phytochemical compounds.",
      "Onions are known to contain manganese, copper, Vitamin B6, Vitamin C, Folic acid, Amino acid and dietary fibers along with phosphorus, folate and copper.",
    ],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683920213/grocery/fresh_vegetables/2_g4ecfh.webp",
    rating: 3.5,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_2",
        unit: "1 kg",
        price: 19,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_3",
        unit: "2 kg",
        price: 38,
        in_stock: true,
        default: false,
      },
      {
        _id: "V_4",
        unit: "5 kg",
        price: 89,
        in_stock: false,
        default: false,
      },
    ],
  },
  {
    _id: "3",
    name: "Red Capsicum",
    sub_category_id: "SC_1",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683920599/grocery/fresh_vegetables/3_shemvi.webp",
    rating: 3.5,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_5",
        unit: "1 piece (125 g - 175 g)",
        price: 50,
        in_stock: false,
        default: true,
      },
    ],
  },
  {
    _id: "4",
    name: "Corn Cob (Bhutta)",
    sub_category_id: "SC_1",
    benefits: [
      "Sweet corn is good for vision and heart health. It is a good source of energy and reduces joint pains.",
      "Suggested as a regular diet for pregnant women and Alzheimer's patients.",
    ],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683920754/grocery/fresh_vegetables/4_m2nyij.webp",
    rating: 4.0,
    delivery_time_in_mins: 15,
    item_variant: [
      {
        _id: "V_6",
        unit: "1 piece",
        price: 19,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "5",
    name: "Cherry Tomato - Hydroponically Grown",
    sub_category_id: "SC_1",
    benefits: [
      "Cherry Tomatoes contain lycopene, an antioxidant that reduces the risk of cancer and heart diseases.",
      "They protect the eyes from light-induced damage.",
      "Essential for pregnant women as these tomatoes protect infants against neural tube defects.",
    ],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683920849/grocery/fresh_vegetables/5_q7m7aq.webp",
    rating: 4.2,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_7",
        unit: "1 piece",
        price: 19,
        in_stock: false,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Fresh Fruits */
  {
    _id: "6",
    name: "Kiran Watermelon (Tarbuj)",
    sub_category_id: "SC_2",
    benefits: [
      "Watermelons have excellent hydrating properties with 90% water content.",
      "Rich in anti-oxidant flavonoids that protects against prostate, breast, colon, pancreatic and lung cancers.",
      "They are an excellent source of lycopene which protects skin against harmful UV rays. It is also a great source for A, C, B-complex vitamins, iron and fiber which boosts body metabolism.",
    ],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683920987/grocery/fresh_fruits/6_fnweje.avif",
    rating: 4.1,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_8",
        unit: "1 piece (1.7 - 2.5 kg)",
        price: 55,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_9",
        unit: "1 piece (2.5 - 3.8 kg)",
        price: 67,
        in_stock: false,
        default: false,
      },
    ],
  },
  {
    _id: "7",
    name: "Kiwi",
    sub_category_id: "SC_2",
    benefits: [
      "Kiwi fruits are rich in vitamin C, fiber, potassium. They reduce the risk of cancer, stroke and respiratory disorders.",
      "Repairs damaged cells and helps in quick wound healing. They are a good choice of snack for diabetic people and weight watchers.",
    ],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683921355/grocery/fresh_fruits/7_ibdbk1.webp",
    rating: 4.5,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_10",
        unit: "3 piece",
        price: 76,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "8",
    name: "Tender Coconut",
    sub_category_id: "SC_2",
    benefits: [
      "Coconut is to stabilizing blood sugar, lowering cholesterol, healing, hydration and even replacing blood plasma in an emergency.",
    ],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683921479/grocery/fresh_fruits/8_wofdex.webp",
    rating: 4.2,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_11",
        unit: "1 piece",
        price: 190,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "9",
    name: "Pomegranate",
    sub_category_id: "SC_2",
    benefits: [
      "Pomegranate is a rich supplier of soluble and insoluble dietary fibers, vitamin K, C, minerals and B-complex vitamins such as B5, B6.",
      "Pomegranate juice lowers bad cholesterol and raises good cholesterol.Reduces the risk of heart stoke.",
      "Gives a boost of energy and freshness. So, this is specially recommended for women during menopause. Good for pregnant women as it prevents brain damage in infants.",
    ],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683921842/grocery/fresh_fruits/9_gtcxgl.webp",
    rating: 3.5,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_12",
        unit: "4 pieces (720 g - 800 g)",
        price: 190,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_13",
        unit: "1 kg (5-6 pieces per kg)",
        price: 210,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "10",
    name: "Pear Imported",
    sub_category_id: "SC_2",
    benefits: [
      "It contains no cholesterol, no sodium, free from saturated fat, an excellent source of fiber and a good source of vitamin C. South AfricaPears are a good source of potassium, which can help in lowering blood pressure and reduce risk of cancer. They have a large amount of natural fructose and glucose, making them a quick source of healthy energy.",
    ],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683922003/grocery/fresh_fruits/10_zyhyua.webp",
    rating: 3.8,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_14",
        unit: "2 pieces (300 g - 350 g)",
        price: 114,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Leafies & Herbs */
  {
    _id: "11",
    name: "Spinach (Palak)",
    sub_category_id: "SC_3",
    benefits: [
      "Palak contains low fat and cholesterol, but a good amount of fiber.",
      "They lower the risk of cancer and the occurrence of asthma.",
      "It improves the blood glucose levels in people suffering from diabetes and also improves skin and bone health.",
    ],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683922779/grocery/leafies_herbs/11_anjsb4.webp",
    rating: 3.4,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_15",
        unit: "200 g",
        price: 20,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "12",
    name: "Mint Leaves (Pudina)",
    sub_category_id: "SC_3",
    benefits: [
      "Mint is a remedy to manage ailments related to the digestive tract, oral, respiratory and skin disorders such as acne, insect bites & burns.",
      "It is found to alleviate migraine pains, minor aches, muscle sprains and cramps.",
    ],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683922869/grocery/leafies_herbs/12_yz5vv4.webp",
    rating: 4.0,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_16",
        unit: "200 g",
        price: 25,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "13",
    name: "Coriander Bunch (Dhaniya)",
    sub_category_id: "SC_3",
    benefits: [
      "Coriander leaves fight food poisoning and lower blood sugar levels.",
      "They relieve urinary tract infections and help in maintaining a healthy menstrual cycle while preventing neurological inflammations and diseases.",
      "Tip - Add coriander leaves to boiling water.",
      "Let it cool down and then consume it.",
      "Drink this water every morning to cleanse the stomach.",
    ],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683923000/grocery/leafies_herbs/13_qwwojq.webp",
    rating: 3.0,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_17",
        unit: "100 g",
        price: 30,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Bread & Pav */
  {
    _id: "14",
    name: "Super White Bread",
    sub_category_id: "SC_4",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683923244/grocery/bread_pav/14_ad3pbg.webp",
    rating: 3.5,
    delivery_time_in_mins: 24,
    item_variant: [
      {
        _id: "V_18",
        unit: "400 g",
        price: 40,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "15",
    name: "The Baker's Dozen 100% Wholewheat Pizza Base",
    sub_category_id: "SC_4",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683924097/grocery/bread_pav/15_uie2ax.webp",
    rating: 3.0,
    delivery_time_in_mins: 23,
    item_variant: [
      {
        _id: "V_19",
        unit: "140 g",
        price: 89,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Cookies */
  {
    _id: "16",
    name: "Parle Platina Hide & Seek Chocolate Chip Cookies",
    sub_category_id: "SC_5",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683924246/grocery/cookies/16_udxcan.webp",
    rating: 3.0,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_20",
        unit: "100 g",
        price: 80,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_21",
        unit: "200 g",
        price: 49,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "17",
    name: "Britannia Good Day Chocochip Cookies",
    sub_category_id: "SC_5",
    benefits: [],
    veg_egg_non: "veg",
    image: "",
    rating: 4.0,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_22",
        unit: "400 g",
        price: 97,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "18",
    name: "Sunfeast Dark Fantasy Biscuit - Choco Fills Biscuit",
    sub_category_id: "SC_5",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683924733/grocery/cookies/18_rtblk9.webp",
    rating: 4.2,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_23",
        unit: "300 g",
        price: 113,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "19",
    name: "Oreo Choco Flavour Sandwich Cream Biscuits",
    sub_category_id: "SC_5",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683924894/grocery/cookies/19_ussngt.webp",
    rating: 4.0,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_24",
        unit: "120 g",
        price: 120,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "20",
    name: "Britannia Bourbon The Original Biscuit - Buy 4 Get 1 Free",
    sub_category_id: "SC_5",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683924934/grocery/cookies/20_crp8or.webp",
    rating: 4.0,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_25",
        unit: "100 g",
        price: 100,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Atta */
  {
    _id: "21",
    name: "Aashirvaad Shudh Chakki Whole Wheat Atta",
    sub_category_id: "SC_6",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683925342/grocery/atta/21_ef7vhw.webp",
    rating: 4.5,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_26",
        unit: "5 kg",
        price: 230,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_27",
        unit: "(5 kg) - Pack of 2",
        price: 490,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "22",
    name: "Fortune Chakki Fresh (100% Atta, 0% Maida) Atta",
    sub_category_id: "SC_6",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683925610/grocery/atta/22_zwj5d3.webp",
    rating: 3.0,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_28",
        unit: "10 kg",
        price: 380,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "23",
    name: "Amul Organic Atta (Whole Wheat)",
    sub_category_id: "SC_6",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683925789/grocery/atta/23_ixtmoo.webp",
    rating: 4.1,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_29",
        unit: "5 kg",
        price: 290,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "24",
    name: "Chakki Atta",
    sub_category_id: "SC_6",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683925952/grocery/atta/24_c9kscz.webp",
    rating: 3.4,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_30",
        unit: "5 kg",
        price: 169,
        in_stock: false,
        default: true,
      },
    ],
  },
  {
    _id: "25",
    name: "Uttam Sooji/Rava",
    sub_category_id: "SC_6",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683926181/grocery/atta/26_e9bhqr.webp",
    rating: 5.0,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_31",
        unit: "1 kg",
        price: 55,
        in_stock: false,
        default: true,
      },
      {
        _id: "V_32",
        unit: "500 g",
        price: 30,
        in_stock: true,
        default: false,
      },
      {
        _id: "V_33",
        unit: "2 * 500 g",
        price: 59,
        in_stock: true,
        default: false,
      },
      {
        _id: "V_34",
        unit: "500 g - Pack of 3",
        price: 89,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "26",
    name: "Praakritik Organic Khapli Wheat Atta",
    sub_category_id: "SC_6",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683926066/grocery/atta/25_dsckts.webp",
    rating: 3.0,
    delivery_time_in_mins: 17,
    item_variant: [
      {
        _id: "V_35",
        unit: "1 kg",
        price: 59,
        in_stock: false,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Rice */
  {
    _id: "27",
    name: "Daawat Rozana Gold Basmati Rice",
    sub_category_id: "SC_7",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683926524/grocery/rice/27_ijghji.webp",
    rating: 4.0,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_36",
        unit: "5 kg",
        price: 439,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "28",
    name: "Daawat Sehat Mini Mogra Basmati Rice (Broken)",
    sub_category_id: "SC_7",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683926593/grocery/rice/28_f1ibwz.webp",
    rating: 4.5,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_37",
        unit: "5 kg",
        price: 295,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Poha, Daliya & Other Grains */
  {
    _id: "29",
    name: "24 Mantra Wheat Organic Daliya",
    sub_category_id: "SC_8",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683926794/grocery/poha_daliya_rains/29_eted6u.webp",
    rating: 3.0,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_38",
        unit: "500 g",
        price: 58,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "30",
    name: "Laxmi Maize Thin Poha",
    sub_category_id: "SC_8",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683926896/grocery/poha_daliya_rains/30_zxzvqm.webp",
    rating: 4.1,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_39",
        unit: "500 g",
        price: 39,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Soft Drinks */
  {
    _id: "31",
    name: "Mountain Dew Grip Soft Drink",
    sub_category_id: "SC_9",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683927058/grocery/soft_drinks/31_itstxe.webp",
    rating: 3.8,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_40",
        unit: "700 ml",
        price: 37,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "32",
    name: "Mirinda Soft Drink",
    sub_category_id: "SC_9",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683927200/grocery/soft_drinks/32_z0a8em.webp",
    rating: 5.0,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_41",
        unit: "750 ml",
        price: 36,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_42",
        unit: "750 ml - Pack of 2",
        price: 71,
        in_stock: true,
        default: false,
      },
      {
        _id: "V_43",
        unit: "2.25 l",
        price: 89,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "33",
    name: "Pepsi Black Zero Sugar Soft Drink",
    sub_category_id: "SC_9",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683927377/grocery/soft_drinks/33_fldvs3.webp",
    rating: 4.0,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_44",
        unit: "250 ml",
        price: 34,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_45",
        unit: "250 ml - Pack of 2",
        price: 67,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "34",
    name: "Thums Up Soft Drink",
    sub_category_id: "SC_9",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683927609/grocery/soft_drinks/34_udimed.webp",
    rating: 3.8,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_46",
        unit: "750 ml",
        price: 38,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "35",
    name: "Coca-Cola Diet Coke Soft Drink",
    sub_category_id: "SC_9",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683927697/grocery/soft_drinks/35_wijlmi.webp",
    rating: 4.3,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_46",
        unit: "300 ml",
        price: 48,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "36",
    name: "Fanta Orange Flavoured Soft Drink",
    sub_category_id: "SC_9",
    benefits: [],
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683927779/grocery/soft_drinks/36_opov7h.webp",
    rating: 4.0,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_47",
        unit: "750 ml",
        price: 39,
        in_stock: false,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Eggs */
  {
    _id: "37",
    name: "Egg First Kadaknath Eggs",
    sub_category_id: "SC_10",
    benefits: [],
    veg_egg_non: "egg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683951639/grocery/eggs/37_uiiqxv.webp",
    rating: 4.0,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_48",
        unit: "6 pieces",
        price: 129,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "38",
    name: "Egg First Duck Speciality Eggs",
    sub_category_id: "SC_10",
    benefits: [],
    veg_egg_non: "egg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683951738/grocery/eggs/38_xy6uuj.webp",
    rating: 3.8,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_49",
        unit: "6 pieces",
        price: 123,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "39",
    name: "Pure Eggs Ala Omega 3 Speciality Eggs",
    sub_category_id: "SC_10",
    benefits: [],
    veg_egg_non: "egg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683951918/grocery/eggs/39_lsaezo.webp",
    rating: 3.7,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_49",
        unit: "6 pieces",
        price: 40,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_50",
        unit: "12 pieces",
        price: 79,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "40",
    name: "Egg First Shell Brown Eggs",
    sub_category_id: "SC_10",
    benefits: [],
    veg_egg_non: "egg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952186/grocery/eggs/40_xrldtk.webp",
    rating: 2.0,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_51",
        unit: "12 pieces",
        price: 163,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Chicken */
  {
    _id: "41",
    name: "ITC Master Chef Desi Style Chicken Patty (Frozen)",
    sub_category_id: "SC_11",
    benefits: [],
    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952350/grocery/chicken/41_pd4irp.webp",
    rating: 4.0,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_52",
        unit: "330 g",
        price: 171,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "42",
    name: "Sumeru Grilled Chicken Burger Patty (Frozen)",
    sub_category_id: "SC_11",
    benefits: [],
    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952459/grocery/chicken/42_dugtvr.webp",
    rating: 3.4,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_53",
        unit: "300 g",
        price: 176,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "43",
    name: "Sumeru Wassup Chicken Nuggets (Frozen) - Buy 1 Get 1 Free",
    sub_category_id: "SC_11",
    benefits: [],
    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952563/grocery/chicken/43_e6uzne.webp",
    rating: 4.3,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_54",
        unit: "450 g + 450 g",
        price: 399,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "44",
    name: "Prasuma Original Chicken Momos (Frozen)",
    sub_category_id: "SC_11",
    benefits: [],
    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952706/grocery/chicken/44_cvqc48.webp",
    rating: 2.6,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_55",
        unit: "10 pieces",
        price: 184,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "45",
    name: "ITC Master Chef Crispy Chicken Fries (Frozen)",
    sub_category_id: "SC_11",
    benefits: [],
    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952767/grocery/chicken/45_lovysu.webp",
    rating: 3.7,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_56",
        unit: "280 g",
        price: 181,
        in_stock: false,
        default: true,
      },
    ],
  },
  {
    _id: "46",
    name: "ITC Master Chef Chicken Seekh Kebab (Frozen)",
    sub_category_id: "SC_11",
    benefits: [],
    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952858/grocery/chicken/46_elxvjg.webp",
    rating: 1.7,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_57",
        unit: "500 g",
        price: 315,
        in_stock: false,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Fish & Seafood */
  {
    _id: "47",
    name: "ITC Master Chef Medium Prawns Peeled & Deveined (Frozen)",
    sub_category_id: "SC_12",
    benefits: [],
    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683953095/grocery/fish_seafood/47_n5pi7g.webp",
    rating: 4.6,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_58",
        unit: "200 g",
        price: 203,
        in_stock: true,
        default: true,
      },
    ],
  },
];
