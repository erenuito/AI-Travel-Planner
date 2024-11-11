const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location : from Istanbul to Kopenhagen, Denmark, for 6 Days and 5 Nights between 12 Jan and 17 Jan for Friends with a Cheap budget with a Flight details,flight number ,deperature airport, arrival airport, arrival date ,arrival time, departure date, departure time, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for 6 days and 5 night with each day plan with best time to visit in JSON format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"trip\": {\n    \"destination\": \"Kopenhagen, Denmark\",\n    \"duration\": \"6 Days and 5 Nights\",\n    \"travelDates\": \"12 Jan - 17 Jan\",\n    \"budget\": \"Cheap\",\n    \"travelers\": \"Friends\",\n    \"flight\": {\n      \"details\": \"Istanbul (IST) to Copenhagen (CPH)\",\n      \"flightNumber\": \"TK1942 (Example)\",\n      \"departureAirport\": \"Istanbul Airport (IST)\",\n      \"arrivalAirport\": \"Copenhagen Airport (CPH)\",\n      \"departureDate\": \"12 Jan 2024\",\n      \"departureTime\": \"10:00 AM\",\n      \"arrivalDate\": \"12 Jan 2024\",\n      \"arrivalTime\": \"12:30 PM\",\n      \"price\": \"€150 - €250 (round trip)\",\n      \"bookingUrl\": \"https://www.skyscanner.net/flights/ist/cph/12-01-2024/17-01-2024/\"\n    },\n    \"hotels\": [\n      {\n        \"hotelName\": \"Generator Copenhagen\",\n        \"hotelAddress\": \"Gothersgade 55, 1123 København K, Denmark\",\n        \"price\": \"€50 - €80 per night\",\n        \"hotelImageUrl\": \"https://images.ctfassets.net/8jcyw6d437k6/4Z19h7u6T2r9dJqD01F5/6f94c81c5f12690516a83d68272c84e6/Generator_Copenhagen_Exterior_15.jpg?w=1200&h=630&q=75&fm=webp\",\n        \"geoCoordinates\": \"55.6769, 12.5714\",\n        \"rating\": \"4.0\",\n        \"description\": \"A trendy and affordable hostel with a social atmosphere, located in the heart of Copenhagen.\",\n        \"placesToVisitNearby\": [\n          {\n            \"placeName\": \"Tivoli Gardens\",\n            \"placeDetails\": \"A world-famous amusement park and entertainment complex.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Tivoli_Gardens.jpg/1200px-Tivoli_Gardens.jpg\",\n            \"geoCoordinates\": \"55.6743, 12.5652\",\n            \"ticketPricing\": \"Adults: €25, Children (4-11): €15\",\n            \"timeToTravel\": \"15-20 minutes walk\"\n          },\n          {\n            \"placeName\": \"The Round Tower\",\n            \"placeDetails\": \"A 17th-century astronomical observatory with a panoramic view of Copenhagen.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Rundet%C3%A5rnet_interior.jpg/1200px-Rundet%C3%A5rnet_interior.jpg\",\n            \"geoCoordinates\": \"55.6772, 12.5732\",\n            \"ticketPricing\": \"Adults: €10, Children (4-17): €5\",\n            \"timeToTravel\": \"10-15 minutes walk\"\n          },\n          {\n            \"placeName\": \"Strøget\",\n            \"placeDetails\": \"The main pedestrian shopping street in Copenhagen, filled with shops, restaurants, and street performers.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Stroget_Copenhagen.jpg/1200px-Stroget_Copenhagen.jpg\",\n            \"geoCoordinates\": \"55.6757, 12.5705\",\n            \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"5-10 minutes walk\"\n          },\n          {\n            \"placeName\": \"Copenhagen City Hall\",\n            \"placeDetails\": \"A beautiful building with a distinctive tower, offering panoramic views of the city.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/K%C3%B8benhavns_R%C3%A5dhus.jpg/1200px-K%C3%B8benhavns_R%C3%A5dhus.jpg\",\n            \"geoCoordinates\": \"55.6766, 12.5711\",\n            \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"5-10 minutes walk\"\n          }\n        ]\n      },\n      {\n        \"hotelName\": \"CPH City Hotel\",\n        \"hotelAddress\": \"Toldbodgade 22, 1253 København K, Denmark\",\n        \"price\": \"€60 - €90 per night\",\n        \"hotelImageUrl\": \"https://www.cphcityhotel.dk/images/hotel/exterior_02.jpg\",\n        \"geoCoordinates\": \"55.6763, 12.5718\",\n        \"rating\": \"3.5\",\n        \"description\": \"A modern and comfortable hotel located near the harbor, offering affordable rates.\",\n        \"placesToVisitNearby\": [\n          {\n            \"placeName\": \"Nyhavn\",\n            \"placeDetails\": \"A picturesque harbor with colorful houses and lively atmosphere.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Nyhavn_Copenhagen.jpg/1200px-Nyhavn_Copenhagen.jpg\",\n            \"geoCoordinates\": \"55.6778, 12.5799\",\n            \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"5-10 minutes walk\"\n          },\n          {\n            \"placeName\": \"Christiansborg Palace\",\n            \"placeDetails\": \"A historic palace serving as the seat of the Danish Parliament, Supreme Court, and Prime Minister's Office.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Christiansborg_Palace_%282014%29.jpg/1200px-Christiansborg_Palace_%282014%29.jpg\",\n            \"geoCoordinates\": \"55.6745, 12.5709\",\n            \"ticketPricing\": \"Adults: €12, Children (8-17): €6\",\n            \"timeToTravel\": \"10-15 minutes walk\"\n          },\n          {\n            \"placeName\": \"The National Theatre\",\n            \"placeDetails\": \"A grand theater hosting a variety of performances, including opera, ballet, and drama.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Det_Kongelige_Teater_Copenhagen_exterior.jpg/1200px-Det_Kongelige_Teater_Copenhagen_exterior.jpg\",\n            \"geoCoordinates\": \"55.6757, 12.5716\",\n            \"ticketPricing\": \"Varies depending on the performance\",\n            \"timeToTravel\": \"5-10 minutes walk\"\n          },\n          {\n            \"placeName\": \"Amalienborg Palace\",\n            \"placeDetails\": \"The winter residence of the Danish Royal Family, with a changing of the guard ceremony.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Amalienborg_Palace_in_Copenhagen.jpg/1200px-Amalienborg_Palace_in_Copenhagen.jpg\",\n            \"geoCoordinates\": \"55.6811, 12.5815\",\n            \"ticketPricing\": \"Free for the changing of the guard\",\n            \"timeToTravel\": \"20-25 minutes walk\"\n          }\n        ]\n      }\n    ],\n    \"dailyPlan\": [\n      {\n        \"day\": \"Day 1 (12 Jan)\",\n        \"activities\": [\n          {\n            \"time\": \"10:00 AM\",\n            \"activity\": \"Arrive at Copenhagen Airport (CPH) and take the Metro (line M2) to Kongens Nytorv station.\",\n            \"location\": \"Copenhagen Airport (CPH)\",\n            \"details\": \"The airport is well connected to the city center by train and metro. The journey takes about 15 minutes.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Copenhagen_Airport_Terminal_3.jpg/1200px-Copenhagen_Airport_Terminal_3.jpg\"\n          },\n          {\n            \"time\": \"11:00 AM\",\n            \"activity\": \"Check in to your hotel, drop your luggage, and head to Nyhavn for lunch.\",\n            \"location\": \"Nyhavn\",\n            \"details\": \"Enjoy a scenic walk along the harbor and have lunch at one of the many restaurants.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Nyhavn_Copenhagen.jpg/1200px-Nyhavn_Copenhagen.jpg\"\n          },\n          {\n            \"time\": \"1:00 PM\",\n            \"activity\": \"Explore the historic streets of Christianshavn, a picturesque neighborhood with canals and charming houses.\",\n            \"location\": \"Christianshavn\",\n            \"details\": \"Visit the Christianshavn Canal and take a walk through the area. You can also visit the Freetown Christiania, a self-proclaimed autonomous community.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Christianshavn%2C_Copenhagen%2C_Denmark.jpg/1200px-Christianshavn%2C_Copenhagen%2C_Denmark.jpg\"\n          },\n          {\n            \"time\": \"4:00 PM\",\n            \"activity\": \"Visit the Little Mermaid statue, a famous bronze sculpture by Edvard Eriksen.\",\n            \"location\": \"The Little Mermaid\",\n            \"details\": \"A short walk from Christianshavn, this statue is a popular tourist attraction.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Den_lille_havfrue.jpg/1200px-Den_lille_havfrue.jpg\"\n          },\n          {\n            \"time\": \"6:00 PM\",\n            \"activity\": \"Enjoy dinner at a local restaurant in the city center, perhaps near Strøget for a vibrant atmosphere.\",\n            \"location\": \"City Center\",\n            \"details\": \"Explore the many restaurants and cafes in the city center.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Copenhagen_panorama_from_Christiansborg_Palace_tower.jpg/1200px-Copenhagen_panorama_from_Christiansborg_Palace_tower.jpg\"\n          }\n        ]\n      },\n      {\n        \"day\": \"Day 2 (13 Jan)\",\n        \"activities\": [\n          {\n            \"time\": \"10:00 AM\",\n            \"activity\": \"Visit the National Museum of Denmark, exploring the history and culture of the country.\",\n            \"location\": \"National Museum of Denmark\",\n            \"details\": \"Learn about Danish history, art, and culture.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Nationalmuseet%2C_Copenhagen%2C_Denmark.jpg/1200px-Nationalmuseet%2C_Copenhagen%2C_Denmark.jpg\"\n          },\n          {\n            \"time\": \"12:00 PM\",\n            \"activity\": \"Lunch at a cafe near the museum and explore the surrounding area.\",\n            \"location\": \"Near the National Museum\",\n            \"details\": \"Enjoy a casual lunch and take a walk through the streets.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Nationalmuseet%2C_Copenhagen%2C_Denmark.jpg/1200px-Nationalmuseet%2C_Copenhagen%2C_Denmark.jpg\"\n          },\n          {\n            \"time\": \"2:00 PM\",\n            \"activity\": \"Visit the Rosenborg Castle, a beautiful Renaissance castle with impressive gardens.\",\n            \"location\": \"Rosenborg Castle\",\n            \"details\": \"Admire the architecture and explore the castle gardens. The castle houses the Danish Crown Jewels, a must-see for history buffs.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Rosenborg_slot.jpg/1200px-Rosenborg_slot.jpg\"\n          },\n          {\n            \"time\": \"5:00 PM\",\n            \"activity\": \"Take a stroll through the King's Garden, a beautiful park near Rosenborg Castle.\",\n            \"location\": \"King's Garden\",\n            \"details\": \"Relax and enjoy the scenery.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Kongens_have.jpg/1200px-Kongens_have.jpg\"\n          },\n          {\n            \"time\": \"7:00 PM\",\n            \"activity\": \"Dinner at a restaurant in the city center and enjoy the evening.\",\n            \"location\": \"City Center\",\n            \"details\": \"Have a delicious dinner and relax.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Copenhagen_panorama_from_Christiansborg_Palace_tower.jpg/1200px-Copenhagen_panorama_from_Christiansborg_Palace_tower.jpg\"\n          }\n        ]\n      },\n      {\n        \"day\": \"Day 3 (14 Jan)\",\n        \"activities\": [\n          {\n            \"time\": \"10:00 AM\",\n            \"activity\": \"Visit the Danish Design Center, showcasing the best of Danish design.\",\n            \"location\": \"Danish Design Center\",\n            \"details\": \"Learn about Danish design and innovation.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Danish_Design_Center%2C_Copenhagen.jpg/1200px-Danish_Design_Center%2C_Copenhagen.jpg\"\n          },\n          {\n            \"time\": \"12:00 PM\",\n            \"activity\": \"Lunch at a nearby cafe or restaurant and explore the neighborhood.\",\n            \"location\": \"Near the Danish Design Center\",\n            \"details\": \"Enjoy a casual lunch and walk around the area.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Danish_Design_Center%2C_Copenhagen.jpg/1200px-Danish_Design_Center%2C_Copenhagen.jpg\"\n          },\n          {\n            \"time\": \"2:00 PM\",\n            \"activity\": \"Explore the vibrant area of Vesterbro, known for its nightlife, bars, and alternative scene.\",\n            \"location\": \"Vesterbro\",\n            \"details\": \"Explore the trendy bars and restaurants in this area. Consider checking out the Meatpacking District.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Vesterbro_gade_134_-_Copenhagen.jpg/1200px-Vesterbro_gade_134_-_Copenhagen.jpg\"\n          },\n          {\n            \"time\": \"5:00 PM\",\n            \"activity\": \"Visit the Meatpacking District, a former industrial area now transformed into a trendy area with shops, restaurants, and bars.\",\n            \"location\": \"Meatpacking District\",\n            \"details\": \"Explore the trendy shops, restaurants, and bars in this area.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/K%C3%B8benhavn_K%C3%B8dbyen.jpg/1200px-K%C3%B8benhavn_K%C3%B8dbyen.jpg\"\n          },\n          {\n            \"time\": \"7:00 PM\",\n            \"activity\": \"Enjoy dinner at a restaurant in the Meatpacking District and experience the nightlife.\",\n            \"location\": \"Meatpacking District\",\n            \"details\": \"Have dinner and explore the nightlife in this area.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/K%C3%B8benhavn_K%C3%B8dbyen.jpg/1200px-K%C3%B8benhavn_K%C3%B8dbyen.jpg\"\n          }\n        ]\n      },\n      {\n        \"day\": \"Day 4 (15 Jan)\",\n        \"activities\": [\n          {\n            \"time\": \"10:00 AM\",\n            \"activity\": \"Visit the Glyptotek, a museum featuring impressive collections of ancient and modern art.\",\n            \"location\": \"Glyptotek\",\n            \"details\": \"Explore the art collection of the museum. Don't miss the Egyptian collection and the works of Danish sculptor Bertel Thorvaldsen.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Glyptoteket%2C_Copenhagen.jpg/1200px-Glyptoteket%2C_Copenhagen.jpg\"\n          },\n          {\n            \"time\": \"12:00 PM\",\n            \"activity\": \"Lunch at a nearby cafe or restaurant and explore the surrounding area.\",\n            \"location\": \"Near the Glyptotek\",\n            \"details\": \"Enjoy a casual lunch and walk around the area. The area around the Glyptotek has several interesting shops and cafes.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Glyptoteket%2C_Copenhagen.jpg/1200px-Glyptoteket%2C_Copenhagen.jpg\"\n          },\n          {\n            \"time\": \"2:00 PM\",\n            \"activity\": \"Visit the Thorvaldsens Museum, showcasing the works of Danish sculptor Bertel Thorvaldsen.\",\n            \"location\": \"Thorvaldsens Museum\",\n            \"details\": \"Explore the sculptures of Bertel Thorvaldsen, one of Denmark's most celebrated sculptors.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Thorvaldsens_Museum_exterior.jpg/1200px-Thorvaldsens_Museum_exterior.jpg\"\n          },\n          {\n            \"time\": \"5:00 PM\",\n            \"activity\": \"Take a stroll through the Botanical Garden, a beautiful green oasis in the city center.\",\n            \"location\": \"Botanical Garden\",\n            \"details\": \"Relax and enjoy the scenery. It's a great place to unwind and escape the city bustle.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Botanical_garden_copenhagen_2010-11-06.jpg/1200px-Botanical_garden_copenhagen_2010-11-06.jpg\"\n          },\n          {\n            \"time\": \"7:00 PM\",\n            \"activity\": \"Dinner at a restaurant in the city center and enjoy the evening.\",\n            \"location\": \"City Center\",\n            \"details\": \"Have a delicious dinner and relax.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Copenhagen_panorama_from_Christiansborg_Palace_tower.jpg/1200px-Copenhagen_panorama_from_Christiansborg_Palace_tower.jpg\"\n          }\n        ]\n      },\n      {\n        \"day\": \"Day 5 (16 Jan)\",\n        \"activities\": [\n          {\n            \"time\": \"10:00 AM\",\n            \"activity\": \"Visit the Frederiksberg Gardens, a beautiful park with a lake and a palace.\",\n            \"location\": \"Frederiksberg Gardens\",\n            \"details\": \"Take a walk in the park and visit the palace. The Frederiksberg Palace is a beautiful example of Danish Rococo architecture.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Frederiksberg_Have_01.jpg/1200px-Frederiksberg_Have_01.jpg\"\n          },\n          {\n            \"time\": \"12:00 PM\",\n            \"activity\": \"Lunch at a cafe near the gardens and enjoy the scenery.\",\n            \"location\": \"Near Frederiksberg Gardens\",\n            \"details\": \"Enjoy a casual lunch and walk around the area.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Frederiksberg_Have_01.jpg/1200px-Frederiksberg_Have_01.jpg\"\n          },\n          {\n            \"time\": \"2:00 PM\",\n            \"activity\": \"Explore the neighborhood of Frederiksberg, with its charming shops, cafes, and restaurants.\",\n            \"location\": \"Frederiksberg\",\n            \"details\": \"Explore the shops, cafes, and restaurants in this area.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Frederiksberg_gade%2C_Copenhagen.jpg/1200px-Frederiksberg_gade%2C_Copenhagen.jpg\"\n          },\n          {\n            \"time\": \"5:00 PM\",\n            \"activity\": \"Visit the Frederiksberg Zoo, home to a wide variety of animals.\",\n            \"location\": \"Frederiksberg Zoo\",\n            \"details\": \"Explore the zoo and see the animals. It's one of the oldest zoos in the world.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Frederiksberg_Zoo_entrance_2018.jpg/1200px-Frederiksberg_Zoo_entrance_2018.jpg\"\n          },\n          {\n            \"time\": \"7:00 PM\",\n            \"activity\": \"Dinner at a restaurant in the city center and enjoy the evening.\",\n            \"location\": \"City Center\",\n            \"details\": \"Have a delicious dinner and relax.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Copenhagen_panorama_from_Christiansborg_Palace_tower.jpg/1200px-Copenhagen_panorama_from_Christiansborg_Palace_tower.jpg\"\n          }\n        ]\n      },\n      {\n        \"day\": \"Day 6 (17 Jan)\",\n        \"activities\": [\n          {\n            \"time\": \"10:00 AM\",\n            \"activity\": \"Visit Tivoli Gardens, a world-famous amusement park with rides, gardens, and entertainment.\",\n            \"location\": \"Tivoli Gardens\",\n            \"details\": \"Enjoy the rides, gardens, and entertainment. It's a great place to spend a day with friends. \",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Tivoli_Gardens.jpg/1200px-Tivoli_Gardens.jpg\"\n          },\n          {\n            \"time\": \"12:00 PM\",\n            \"activity\": \"Lunch at a restaurant in Tivoli Gardens and enjoy the atmosphere.\",\n            \"location\": \"Tivoli Gardens\",\n            \"details\": \"Enjoy a casual lunch and walk around the area.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Tivoli_Gardens.jpg/1200px-Tivoli_Gardens.jpg\"\n          },\n          {\n            \"time\": \"2:00 PM\",\n            \"activity\": \"Visit the Round Tower, a 17th-century observatory with panoramic views of Copenhagen.\",\n            \"location\": \"The Round Tower\",\n            \"details\": \"Climb to the top of the tower for amazing views. You can also visit the observatory.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Rundet%C3%A5rnet_interior.jpg/1200px-Rundet%C3%A5rnet_interior.jpg\"\n          },\n          {\n            \"time\": \"4:00 PM\",\n            \"activity\": \"Check out from your hotel and head to Copenhagen Airport (CPH) for your flight back home.\",\n            \"location\": \"Copenhagen Airport (CPH)\",\n            \"details\": \"Take public transport (train or metro) to the airport.\",\n            \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Copenhagen_Airport_Terminal_3.jpg/1200px-Copenhagen_Airport_Terminal_3.jpg\"\n          }\n        ]\n      }\n    ]\n  }\n}\n```\n\n**Key Changes:**\n\n* **More Specific Flight Information:**  The flight details include flight number, departure and arrival airports, departure date, departure time, arrival date, and arrival time.  Remember that you'll need to use a flight search engine to get the exact flight details for your travel dates.\n* **Improved Places to Visit Nearby:** The places to visit near each hotel are more detailed and include estimates of travel time from the hotel.\n* **More Realistic Time Estimates:** I've adjusted the time estimates for activities to be more realistic.\n* **Additional Details:** I've added details to each activity, such as specific things to see or do and suggestions for the best time of day. \n* **Copenhagen Card:**  Consider getting a Copenhagen Card for discounts and free entry to many attractions.\n\n**Important Notes:**\n\n* This itinerary is just a starting point.\n* You'll need to search for current flight and hotel prices.\n* Adjust the activities and times based on your interests and budget.\n\nThis is a sample itinerary that focuses on budget-friendly options for a group of friends. You can modify it to suit your own preferences, interests, and budget. Have a great time in Copenhagen!\n"},
          ],
        },

      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  
  
