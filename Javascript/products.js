const products = [

  // ============================
  // SAMSUNG (5)
  // ============================
  {
    id: 1,
    brand: "Samsung",
    name: "Samsung Galaxy S24 Ultra",
    price: 389999,
    storage: 512,
    date: "2026-01-10",
    img: "/images/shop/s24-ultra-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Titanium Black", "Titanium Gray", "Violet", "Yellow"],
    colorImages: {
      "Titanium Black": "/images/shop/s24-ultra-black.jfif",
      "Titanium Gray": "/images/shop/s24-ultra-gray.jfif",
      "Violet": "/images/shop/s24-ultra-violet.jfif",
      "Yellow": "/images/shop/s24-ultra-yellow.jfif"
    },
    storageOptions: ["256GB", "512GB", "1TB"],
    specs: {
      Display: "6.8 inch Dynamic AMOLED 2X (120Hz)",
      Processor: "Snapdragon 8 Gen 3",
      RAM: "12GB",
      Battery: "5000mAh",
      RearCamera: "200MP + 50MP + 12MP + 10MP",
      FrontCamera: "12MP",
      Charging: "45W Fast Charging",
      OS: "Android 14 (One UI)",
      Network: "5G Supported"
    }
  },

  {
    id: 2,
    brand: "Samsung",
    name: "Samsung Galaxy S24",
    price: 289999,
    storage: 256,
    date: "2026-01-05",
    img: "/images/shop/s24-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow"],
    colorImages: {
      "Onyx Black": "/images/shop/s24-black.jfif",
      "Marble Gray": "/images/shop/s24-gray.jfif",
      "Cobalt Violet": "/images/shop/s24-violet.jfif",
      "Amber Yellow": "/images/shop/s24-yellow.jfif"
    },
    storageOptions: ["128GB", "256GB", "512GB"],
    specs: {
      Display: "6.2 inch Dynamic AMOLED 2X (120Hz)",
      Processor: "Snapdragon 8 Gen 3",
      RAM: "8GB",
      Battery: "4000mAh",
      RearCamera: "50MP + 12MP + 10MP",
      FrontCamera: "12MP",
      Charging: "25W Fast Charging",
      OS: "Android 14 (One UI)",
      Network: "5G Supported"
    }
  },

  {
    id: 3,
    brand: "Samsung",
    name: "Samsung Galaxy Z Fold 5",
    price: 499999,
    storage: 512,
    date: "2025-11-20",
    img: "/images/shop/zfold5-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Icy Blue", "Phantom Black", "Cream"],
    colorImages: {
      "Icy Blue": "/images/shop/zfold5-blue.jfif",
      "Phantom Black": "/images/shop/zfold5-black.jfif",
      "Cream": "/images/shop/zfold5-cream.jfif"
    },
    storageOptions: ["256GB", "512GB", "1TB"],
    specs: {
      Display: "7.6 inch Foldable Dynamic AMOLED 2X (120Hz)",
      Processor: "Snapdragon 8 Gen 2",
      RAM: "12GB",
      Battery: "4400mAh",
      RearCamera: "50MP + 12MP + 10MP",
      FrontCamera: "10MP",
      Charging: "25W Fast Charging",
      OS: "Android 13 (One UI)",
      Network: "5G Supported"
    }
  },

  {
    id: 4,
    brand: "Samsung",
    name: "Samsung Galaxy Z Flip 5",
    price: 299999,
    storage: 256,
    date: "2025-12-01",
    img: "/images/shop/zflip5-graphite.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Graphite", "Cream", "Lavender", "Mint"],
    colorImages: {
      "Graphite": "/images/shop/zflip5-graphite.jfif",
      "Cream": "/images/shop/zflip5-cream.jfif",
      "Lavender": "/images/shop/zflip5-lavender.jfif",
      "Mint": "/images/shop/zflip5-mint.jfif"
    },
    storageOptions: ["256GB", "512GB"],
    specs: {
      Display: "6.7 inch Foldable Dynamic AMOLED 2X (120Hz)",
      Processor: "Snapdragon 8 Gen 2",
      RAM: "8GB",
      Battery: "3700mAh",
      RearCamera: "12MP + 12MP",
      FrontCamera: "10MP",
      Charging: "25W Fast Charging",
      OS: "Android 13 (One UI)",
      Network: "5G Supported"
    }
  },

  {
    id: 5,
    brand: "Samsung",
    name: "Samsung Galaxy A55",
    price: 139999,
    storage: 256,
    date: "2026-02-01",
    img: "/images/shop/a55-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Awesome Black", "Awesome Blue", "Awesome Violet", "Awesome White"],
    colorImages: {
      "Awesome Black": "/images/shop/a55-black.jfif",
      "Awesome Blue": "/images/shop/a55-blue.jfif",
      "Awesome Violet": "/images/shop/a55-violet.jfif",
      "Awesome White": "/images/shop/a55-white.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.6 inch Super AMOLED (120Hz)",
      Processor: "Exynos 1480",
      RAM: "8GB",
      Battery: "5000mAh",
      RearCamera: "50MP + 12MP + 5MP",
      FrontCamera: "32MP",
      Charging: "25W Fast Charging",
      OS: "Android 14",
      Network: "5G Supported"
    }
  },


  // ============================
  // APPLE (5)
  // ============================
  {
    id: 6,
    brand: "Apple",
    name: "Apple iPhone 15 Pro Max",
    price: 459999,
    storage: 256,
    date: "2026-01-05",
    img: "/images/shop/iphone15promax-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
    colorImages: {
      "Black Titanium": "/images/shop/iphone15promax-black.jfif",
      "White Titanium": "/images/shop/iphone15promax-white.jfif",
      "Blue Titanium": "/images/shop/iphone15promax-blue.jfif",
      "Natural Titanium": "/images/shop/iphone15promax-natural.jfif"
    },
    storageOptions: ["256GB", "512GB", "1TB"],
    specs: {
      Display: "6.7 inch Super Retina XDR OLED (120Hz)",
      Processor: "Apple A17 Pro",
      RAM: "8GB",
      Battery: "Approx 4422mAh",
      RearCamera: "48MP + 12MP + 12MP",
      FrontCamera: "12MP TrueDepth",
      Charging: "20W Fast Charging",
      OS: "iOS 17",
      Network: "5G Supported"
    }
  },

  {
    id: 7,
    brand: "Apple",
    name: "Apple iPhone 15 Pro",
    price: 429999,
    storage: 256,
    date: "2025-12-20",
    img: "/images/shop/iphone15pro-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
    colorImages: {
      "Black Titanium": "/images/shop/iphone15pro-black.jfif",
      "White Titanium": "/images/shop/iphone15pro-white.jfif",
      "Blue Titanium": "/images/shop/iphone15pro-blue.jfif",
      "Natural Titanium": "/images/shop/iphone15pro-natural.jfif"
    },
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    specs: {
      Display: "6.1 inch Super Retina XDR OLED (120Hz)",
      Processor: "Apple A17 Pro",
      RAM: "8GB",
      Battery: "Approx 3274mAh",
      RearCamera: "48MP + 12MP + 12MP",
      FrontCamera: "12MP TrueDepth",
      Charging: "20W Fast Charging",
      OS: "iOS 17",
      Network: "5G Supported"
    }
  },

  {
    id: 8,
    brand: "Apple",
    name: "Apple iPhone 15",
    price: 349999,
    storage: 128,
    date: "2025-12-15",
    img: "/images/shop/iphone15-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Black", "Blue", "Green", "Yellow", "Pink"],
    colorImages: {
      "Black": "/images/shop/iphone15-black.jfif",
      "Blue": "/images/shop/iphone15-blue.jfif",
      "Green": "/images/shop/iphone15-green.jfif",
      "Yellow": "/images/shop/iphone15-yellow.jfif",
      "Pink": "/images/shop/iphone15-pink.jfif"
    },
    storageOptions: ["128GB", "256GB", "512GB"],
    specs: {
      Display: "6.1 inch Super Retina XDR OLED",
      Processor: "Apple A16 Bionic",
      RAM: "6GB",
      Battery: "Approx 3349mAh",
      RearCamera: "48MP + 12MP",
      FrontCamera: "12MP TrueDepth",
      Charging: "20W Fast Charging",
      OS: "iOS 17",
      Network: "5G Supported"
    }
  },

  {
    id: 9,
    brand: "Apple",
    name: "Apple iPhone 14 Pro Max",
    price: 369999,
    storage: 256,
    date: "2025-06-25",
    img: "/images/shop/iphone14promax-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Deep Purple", "Gold", "Silver", "Space Black"],
    colorImages: {
      "Deep Purple": "/images/shop/iphone14promax-purple.jfif",
      "Gold": "/images/shop/iphone14promax-gold.jfif",
      "Silver": "/images/shop/iphone14promax-silver.jfif",
      "Space Black": "/images/shop/iphone14promax-black.jfif"
    },
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    specs: {
      Display: "6.7 inch Super Retina XDR OLED (120Hz)",
      Processor: "Apple A16 Bionic",
      RAM: "6GB",
      Battery: "Approx 4323mAh",
      RearCamera: "48MP + 12MP + 12MP",
      FrontCamera: "12MP TrueDepth",
      Charging: "20W Fast Charging",
      OS: "iOS 16",
      Network: "5G Supported"
    }
  },

  {
    id: 10,
    brand: "Apple",
    name: "Apple iPhone 13",
    price: 249999,
    storage: 128,
    date: "2025-02-10",
    img: "/images/shop/iphone13-midnight.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Midnight", "Starlight", "Blue", "Pink", "Green"],
    colorImages: {
      "Midnight": "/images/shop/iphone13-midnight.jfif",
      "Starlight": "/images/shop/iphone13-starlight.jfif",
      "Blue": "/images/shop/iphone13-blue.jfif",
      "Pink": "/images/shop/iphone13-pink.jfif",
      "Green": "/images/shop/iphone13-green.jfif"
    },
    storageOptions: ["128GB", "256GB", "512GB"],
    specs: {
      Display: "6.1 inch Super Retina XDR OLED",
      Processor: "Apple A15 Bionic",
      RAM: "4GB",
      Battery: "Approx 3240mAh",
      RearCamera: "12MP + 12MP",
      FrontCamera: "12MP",
      Charging: "20W Fast Charging",
      OS: "iOS 15",
      Network: "5G Supported"
    }
  },


  // ============================
  // GOOGLE PIXEL (5)
  // ============================
  {
    id: 11,
    brand: "Google",
    name: "Google Pixel 8 Pro",
    price: 289999,
    storage: 256,
    date: "2026-01-20",
    img: "/images/shop/pixel8pro-obsidian.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Obsidian", "Porcelain", "Bay"],
    colorImages: {
      "Obsidian": "/images/shop/pixel8pro-obsidian.jfif",
      "Porcelain": "/images/shop/pixel8pro-porcelain.jfif",
      "Bay": "/images/shop/pixel8pro-bay.jfif"
    },
    storageOptions: ["128GB", "256GB", "512GB"],
    specs: {
      Display: "6.7 inch LTPO OLED (120Hz)",
      Processor: "Google Tensor G3",
      RAM: "12GB",
      Battery: "5050mAh",
      RearCamera: "50MP + 48MP + 48MP",
      FrontCamera: "10.5MP",
      Charging: "30W Fast Charging",
      OS: "Android 14",
      Network: "5G Supported"
    }
  },

  {
    id: 12,
    brand: "Google",
    name: "Google Pixel 8",
    price: 239999,
    storage: 128,
    date: "2025-12-05",
    img: "/images/shop/pixel8-obsidian.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Obsidian", "Hazel", "Rose"],
    colorImages: {
      "Obsidian": "/images/shop/pixel8-obsidian.jfif",
      "Hazel": "/images/shop/pixel8-hazel.jfif",
      "Rose": "/images/shop/pixel8-rose.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.2 inch OLED (120Hz)",
      Processor: "Google Tensor G3",
      RAM: "8GB",
      Battery: "4575mAh",
      RearCamera: "50MP + 12MP",
      FrontCamera: "10.5MP",
      Charging: "27W Fast Charging",
      OS: "Android 14",
      Network: "5G Supported"
    }
  },

  {
    id: 13,
    brand: "Google",
    name: "Google Pixel 7 Pro",
    price: 199999,
    storage: 128,
    date: "2025-04-15",
    img: "/images/shop/pixel7pro-obsidian.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Obsidian", "Snow", "Hazel"],
    colorImages: {
      "Obsidian": "/images/shop/pixel7pro-obsidian.jfif",
      "Snow": "/images/shop/pixel7pro-snow.jfif",
      "Hazel": "/images/shop/pixel7pro-hazel.jfif"
    },
    storageOptions: ["128GB", "256GB", "512GB"],
    specs: {
      Display: "6.7 inch LTPO OLED (120Hz)",
      Processor: "Google Tensor G2",
      RAM: "12GB",
      Battery: "5000mAh",
      RearCamera: "50MP + 48MP + 12MP",
      FrontCamera: "10.8MP",
      Charging: "23W Fast Charging",
      OS: "Android 13",
      Network: "5G Supported"
    }
  },

  {
    id: 14,
    brand: "Google",
    name: "Google Pixel 7",
    price: 169999,
    storage: 128,
    date: "2025-03-01",
    img: "/images/shop/pixel7-obsidian.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Obsidian", "Snow", "Lemongrass"],
    colorImages: {
      "Obsidian": "/images/shop/pixel7-obsidian.jfif",
      "Snow": "/images/shop/pixel7-snow.jfif",
      "Lemongrass": "/images/shop/pixel7-lemongrass.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.3 inch OLED (90Hz)",
      Processor: "Google Tensor G2",
      RAM: "8GB",
      Battery: "4355mAh",
      RearCamera: "50MP + 12MP",
      FrontCamera: "10.8MP",
      Charging: "20W Fast Charging",
      OS: "Android 13",
      Network: "5G Supported"
    }
  },

  {
    id: 15,
    brand: "Google",
    name: "Google Pixel 6 Pro",
    price: 139999,
    storage: 128,
    date: "2024-11-11",
    img: "/images/shop/pixel6pro-stormyblack.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Stormy Black", "Cloudy White", "Sorta Sunny"],
    colorImages: {
      "Stormy Black": "/images/shop/pixel6pro-stormyblack.jfif",
      "Cloudy White": "/images/shop/pixel6pro-cloudywhite.jfif",
      "Sorta Sunny": "/images/shop/pixel6pro-sunny.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.7 inch LTPO AMOLED (120Hz)",
      Processor: "Google Tensor",
      RAM: "12GB",
      Battery: "5003mAh",
      RearCamera: "50MP + 48MP + 12MP",
      FrontCamera: "11.1MP",
      Charging: "30W Fast Charging",
      OS: "Android 12",
      Network: "5G Supported"
    }
  },


  // ============================
  // OPPO (5)
  // ============================
  {
    id: 16,
    brand: "Oppo",
    name: "Oppo Reno 11",
    price: 129999,
    storage: 256,
    date: "2026-02-20",
    img: "/images/shop/reno11-wavegreen.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Wave Green", "Rock Grey"],
    colorImages: {
      "Wave Green": "/images/shop/reno11-wavegreen.jfif",
      "Rock Grey": "/images/shop/reno11-rockgrey.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.7 inch AMOLED (120Hz)",
      Processor: "Dimensity 7050",
      RAM: "8GB",
      Battery: "5000mAh",
      RearCamera: "64MP + 8MP + 2MP",
      FrontCamera: "32MP",
      Charging: "67W SUPERVOOC",
      OS: "Android 14 (ColorOS)",
      Network: "5G Supported"
    }
  },

  {
    id: 17,
    brand: "Oppo",
    name: "Oppo Reno 10",
    price: 109999,
    storage: 256,
    date: "2025-08-10",
    img: "/images/shop/reno10-iceblue.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Ice Blue", "Silvery Grey"],
    colorImages: {
      "Ice Blue": "/images/shop/reno10-iceblue.jfif",
      "Silvery Grey": "/images/shop/reno10-silvergrey.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.7 inch AMOLED (120Hz)",
      Processor: "Snapdragon 778G",
      RAM: "8GB",
      Battery: "5000mAh",
      RearCamera: "64MP + 32MP + 8MP",
      FrontCamera: "32MP",
      Charging: "67W SUPERVOOC",
      OS: "Android 13 (ColorOS)",
      Network: "5G Supported"
    }
  },

  {
    id: 18,
    brand: "Oppo",
    name: "Oppo A78",
    price: 69999,
    storage: 128,
    date: "2025-01-15",
    img: "/images/shop/a78-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Glowing Black", "Glowing Purple"],
    colorImages: {
      "Glowing Black": "/images/shop/a78-black.jfif",
      "Glowing Purple": "/images/shop/a78-purple.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.43 inch AMOLED (90Hz)",
      Processor: "Snapdragon 680",
      RAM: "8GB",
      Battery: "5000mAh",
      RearCamera: "50MP + 2MP",
      FrontCamera: "8MP",
      Charging: "67W SUPERVOOC",
      OS: "Android 13 (ColorOS)",
      Network: "4G Supported"
    }
  },

  {
    id: 19,
    brand: "Oppo",
    name: "Oppo A58",
    price: 59999,
    storage: 128,
    date: "2024-12-25",
    img: "/images/shop/a58-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Glowing Black", "Dazzling Green"],
    colorImages: {
      "Glowing Black": "/images/shop/a58-black.jfif",
      "Dazzling Green": "/images/shop/a58-green.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.72 inch IPS LCD (60Hz)",
      Processor: "Helio G85",
      RAM: "6GB",
      Battery: "5000mAh",
      RearCamera: "50MP + 2MP",
      FrontCamera: "8MP",
      Charging: "33W Fast Charging",
      OS: "Android 13 (ColorOS)",
      Network: "4G Supported"
    }
  },

  {
    id: 20,
    brand: "Oppo",
    name: "Oppo Find X5",
    price: 249999,
    storage: 256,
    date: "2025-05-10",
    img: "/images/shop/findx5-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Ceramic White", "Glaze Black"],
    colorImages: {
      "Ceramic White": "/images/shop/findx5-white.jfif",
      "Glaze Black": "/images/shop/findx5-black.jfif"
    },
    storageOptions: ["256GB", "512GB"],
    specs: {
      Display: "6.55 inch AMOLED (120Hz)",
      Processor: "Snapdragon 888",
      RAM: "8GB",
      Battery: "4800mAh",
      RearCamera: "50MP + 50MP + 13MP",
      FrontCamera: "32MP",
      Charging: "80W SuperVOOC",
      OS: "Android 12 (ColorOS)",
      Network: "5G Supported"
    }
  },


  // ============================
  // REALME (5)
  // ============================
  {
    id: 21,
    brand: "Realme",
    name: "Realme 11 Pro",
    price: 89999,
    storage: 256,
    date: "2025-09-01",
    img: "/images/shop/realme11pro-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Astral Black", "Sunrise Beige"],
    colorImages: {
      "Astral Black": "/images/shop/realme11pro-black.jfif",
      "Sunrise Beige": "/images/shop/realme11pro-beige.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.7 inch AMOLED (120Hz)",
      Processor: "Dimensity 7050",
      RAM: "8GB",
      Battery: "5000mAh",
      RearCamera: "100MP + 2MP",
      FrontCamera: "16MP",
      Charging: "67W Fast Charging",
      OS: "Android 13 (Realme UI)",
      Network: "5G Supported"
    }
  },

  {
    id: 22,
    brand: "Realme",
    name: "Realme Narzo 60",
    price: 74999,
    storage: 128,
    date: "2025-07-10",
    img: "/images/shop/narzo60-orange.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Mars Orange", "Cosmic Black"],
    colorImages: {
      "Mars Orange": "/images/shop/narzo60-orange.jfif",
      "Cosmic Black": "/images/shop/narzo60-black.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.43 inch AMOLED (90Hz)",
      Processor: "Dimensity 6020",
      RAM: "8GB",
      Battery: "5000mAh",
      RearCamera: "64MP + 2MP",
      FrontCamera: "16MP",
      Charging: "33W Fast Charging",
      OS: "Android 13 (Realme UI)",
      Network: "5G Supported"
    }
  },

  {
    id: 23,
    brand: "Realme",
    name: "Realme C55",
    price: 45999,
    storage: 128,
    date: "2025-02-20",
    img: "/images/shop/realme-c55-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Rainy Night", "Sunshower"],
    colorImages: {
      "Rainy Night": "/images/shop/realme-c55-black.jfif",
      "Sunshower": "/images/shop/realme-c55-yellow.jfif"
    },
    storageOptions: ["64GB", "128GB", "256GB"],
    specs: {
      Display: "6.72 inch IPS LCD (90Hz)",
      Processor: "Helio G88",
      RAM: "6GB",
      Battery: "5000mAh",
      RearCamera: "64MP + 2MP",
      FrontCamera: "8MP",
      Charging: "33W Fast Charging",
      OS: "Android 13 (Realme UI)",
      Network: "4G Supported"
    }
  },

  {
    id: 24,
    brand: "Realme",
    name: "Realme GT Neo",
    price: 159999,
    storage: 256,
    date: "2025-04-05",
    img: "/images/shop/gtneo-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Black", "Silver", "Blue"],
    colorImages: {
      "Black": "/images/shop/gtneo-black.jfif",
      "Silver": "/images/shop/gtneo-silver.jfif",
      "Blue": "/images/shop/gtneo-blue.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.7 inch AMOLED (120Hz)",
      Processor: "Dimensity 920",
      RAM: "12GB",
      Battery: "5000mAh",
      RearCamera: "64MP + 8MP + 2MP",
      FrontCamera: "16MP",
      Charging: "65W Fast Charging",
      OS: "Android 12 (Realme UI)",
      Network: "5G Supported"
    }
  },

  {
    id: 25,
    brand: "Realme",
    name: "Realme 10",
    price: 59999,
    storage: 128,
    date: "2024-10-20",
    img: "/images/shop/realme10-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Clash White", "Rush Black"],
    colorImages: {
      "Clash White": "/images/shop/realme10-white.jfif",
      "Rush Black": "/images/shop/realme10-black.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.4 inch Super AMOLED (90Hz)",
      Processor: "Helio G99",
      RAM: "8GB",
      Battery: "5000mAh",
      RearCamera: "50MP + 2MP + 2MP",
      FrontCamera: "16MP",
      Charging: "33W Fast Charging",
      OS: "Android 12 (Realme UI)",
      Network: "4G Supported"
    }
  },


  // ============================
  // XIAOMI (5)
  // ============================
  {
    id: 26,
    brand: "Xiaomi",
    name: "Xiaomi Redmi Note 13",
    price: 64999,
    storage: 128,
    date: "2026-03-01",
    img: "/images/shop/redminote13-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Midnight Black", "Ocean Blue", "Mint Green"],
    colorImages: {
      "Midnight Black": "/images/shop/redminote13-black.jfif",
      "Ocean Blue": "/images/shop/redminote13-blue.jfif",
      "Mint Green": "/images/shop/redminote13-green.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.67 inch AMOLED (120Hz)",
      Processor: "Snapdragon 685",
      RAM: "8GB",
      Battery: "5000mAh",
      RearCamera: "108MP + 8MP + 2MP",
      FrontCamera: "16MP",
      Charging: "33W Fast Charging",
      OS: "Android 13 (MIUI)",
      Network: "4G Supported"
    }
  },

  {
    id: 27,
    brand: "Xiaomi",
    name: "Xiaomi Redmi Note 12",
    price: 59999,
    storage: 128,
    date: "2025-06-12",
    img: "/images/shop/redminote12-gray.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Onyx Gray", "Ice Blue", "Mint Green"],
    colorImages: {
      "Onyx Gray": "/images/shop/redminote12-gray.jfif",
      "Ice Blue": "/images/shop/redminote12-blue.jfif",
      "Mint Green": "/images/shop/redminote12-green.jfif"
    },
    storageOptions: ["64GB", "128GB", "256GB"],
    specs: {
      Display: "6.67 inch AMOLED (120Hz)",
      Processor: "Snapdragon 685",
      RAM: "6GB",
      Battery: "5000mAh",
      RearCamera: "50MP + 8MP + 2MP",
      FrontCamera: "13MP",
      Charging: "33W Fast Charging",
      OS: "Android 13 (MIUI)",
      Network: "4G Supported"
    }
  },

  {
    id: 28,
    brand: "Xiaomi",
    name: "Xiaomi Poco X5 Pro",
    price: 99999,
    storage: 256,
    date: "2025-08-15",
    img: "/images/shop/pocox5pro-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Black", "Blue", "Yellow"],
    colorImages: {
      "Black": "/images/shop/pocox5pro-black.jfif",
      "Blue": "/images/shop/pocox5pro-blue.jfif",
      "Yellow": "/images/shop/pocox5pro-yellow.jfif"
    },
    storageOptions: ["128GB", "256GB"],
    specs: {
      Display: "6.67 inch AMOLED (120Hz)",
      Processor: "Snapdragon 778G",
      RAM: "8GB",
      Battery: "5000mAh",
      RearCamera: "108MP + 8MP + 2MP",
      FrontCamera: "16MP",
      Charging: "67W Fast Charging",
      OS: "Android 12 (MIUI)",
      Network: "5G Supported"
    }
  },

  {
    id: 29,
    brand: "Xiaomi",
    name: "Xiaomi Poco F5",
    price: 139999,
    storage: 256,
    date: "2025-09-20",
    img: "/images/shop/pocof5-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Black", "White", "Blue"],
    colorImages: {
      "Black": "/images/shop/pocof5-black.jfif",
      "White": "/images/shop/pocof5-white.jfif",
      "Blue": "/images/shop/pocof5-blue.jfif"
    },
    storageOptions: ["256GB", "512GB"],
    specs: {
      Display: "6.67 inch AMOLED (120Hz)",
      Processor: "Snapdragon 7+ Gen 2",
      RAM: "12GB",
      Battery: "5000mAh",
      RearCamera: "64MP + 8MP + 2MP",
      FrontCamera: "16MP",
      Charging: "67W Fast Charging",
      OS: "Android 13 (MIUI)",
      Network: "5G Supported"
    }
  },

  {
    id: 30,
    brand: "Xiaomi",
    name: "Xiaomi 13T Pro",
    price: 219999,
    storage: 512,
    date: "2025-11-01",
    img: "/images/shop/xiaomi13tpro-black.jfif",

    manualPDF: "/manuals/manual.pdf",

    colors: ["Black", "Blue", "Green"],
    colorImages: {
      "Black": "/images/shop/xiaomi13tpro-black.jfif",
      "Blue": "/images/shop/xiaomi13tpro-blue.jfif",
      "Green": "/images/shop/xiaomi13tpro-green.jfif"
    },
    storageOptions: ["256GB", "512GB"],
    specs: {
      Display: "6.67 inch AMOLED (144Hz)",
      Processor: "Dimensity 9200+",
      RAM: "12GB",
      Battery: "5000mAh",
      RearCamera: "50MP + 50MP + 12MP",
      FrontCamera: "20MP",
      Charging: "120W HyperCharge",
      OS: "Android 13 (MIUI)",
      Network: "5G Supported"
    }
  }

];