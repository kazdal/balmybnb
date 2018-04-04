# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  User.delete_all
  Spot.delete_all
  Booking.delete_all
  Review.delete_all
  SpotImage.delete_all

  User.create(email: 'worldtraveler@onlywarmplaces.com', first_name: 'Judice', last_name: 'Grambley', image_url: 'https://a0.muscache.com/im/pictures/41b239ba-1b29-488c-9e84-828d0d5e0073.jpg?aki_policy=profile_small', password: '123456')
  User.create(email: 'dkang@gmail.com', first_name: 'Dan', last_name: 'Kang', image_url: 'demo.jpg', password: '123456')
  User.create(email: 'balmypoweruser@onlywarmplaces.com', first_name: 'David', last_name: 'Smith', image_url: 'demo.jpg', password: '123456')
  User.create(email: 'realuser@onlywarmplaces.com', first_name: 'Pharrell', last_name: 'Williams', image_url: 'demo.jpg', password: '123456')

  # Los Angeles

  Spot.create(title: '180-Degree Ocean View in Paradise West Malibu', description: 'Directly above the see on a hilltop of its own there is a Shangri-La where the sun rises and sets and the ocean meets the sky. It is only a short walk down to Nicholas Canyon Beach but here you are in another world. This contemporary Mediterranean home has breathtaking views of the sea and mountains yet the best beaches, restaurants and shops are within minutes driving distance.
  Cypress Cove is less than a mile drive and Pepperdine and Camarillo Premium Outlets are a 20 minute drive.', price: 150, lat: 33.844337, lng: -118.394661)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/west-malibu.jpeg", spot_id: Spot.first.id)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/malibu-interior.jpeg", spot_id: Spot.first.id )

    Booking.create(start_date: '01-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.first.id)
    Booking.create(start_date: '01-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.first.id)
    Booking.create(start_date: '21-04-2018', end_date: '22-04-2018', user_id: User.second.id, spot_id: Spot.first.id)
    Booking.create(start_date: '23-04-2018', end_date: '29-04-2018', user_id: User.third.id, spot_id: Spot.first.id)
    Booking.create(start_date: '31-04-2018', end_date: '29-05-2018', user_id: User.fourth.id, spot_id: Spot.first.id)

    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 2, spot_id: Spot.first.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Had a great time here, would stay again. We spent wonderful time in this cool bedroom, the house is even better than the pictures cosy and stylish.', rating: 4, spot_id: Spot.first.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 4, spot_id: Spot.first.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 5, spot_id: Spot.first.id, user_id: User.first.id)




  Spot.create(title: 'Malibu Getaway', description: 'Amazing Malibu destination. Location is great and close to everything you need. Great food spots nearby and nightlife!', price: 277, lat: 34.019956, lng: -118.824270)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/photo-1501183638710-841dd1904471.jpeg", spot_id: Spot.second.id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/photo-1512212621149-107ffe572d2f.jpeg", spot_id: Spot.second.id )

    Booking.create(start_date: '01-04-2018', end_date: '12-04-2018', user_id: User.third.id, spot_id: Spot.second.id)
    Booking.create(start_date: '20-04-2018', end_date: '21-04-2018', user_id: User.second.id, spot_id: Spot.second.id)
    Booking.create(start_date: '22-04-2018', end_date: '24-04-2018', user_id: User.third.id, spot_id: Spot.second.id)
    Booking.create(start_date: '26-04-2018', end_date: '04-05-2018', user_id: User.fourth.id, spot_id: Spot.second.id)

    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 5, spot_id: Spot.second.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.second.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.second.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 5, spot_id: Spot.second.id, user_id: User.first.id)



  Spot.create(title: 'West LA apartment', description: 'Sunny Los Angeles place with great access to other places. Sunny Los Angeles place with great access to other places. Sunny Los Angeles place with great access to other places. Sunny Los Angeles place with great access to other places. Sunny Los Angeles place with great access to other places. Sunny Los Angeles place with great access to other places', price: 50, lat: 34.045061, lng: -118.431662)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/c.jpg", spot_id: Spot.third.id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/sss.jpg", spot_id: Spot.third.id )

    Booking.create(start_date: '12-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.third.id)
    Booking.create(start_date: '22-04-2018', end_date: '25-04-2018', user_id: User.fourth.id, spot_id: Spot.third.id)
    Booking.create(start_date: '01-05-2018', end_date: '12-05-2018', user_id: User.third.id, spot_id: Spot.third.id)

    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.third.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a solid spot. I was surprised.', rating: 3, spot_id: Spot.third.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Cool Place, great for entertaining', rating: 4, spot_id: Spot.third.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 5, spot_id: Spot.third.id, user_id: User.first.id)


  Spot.create(title: 'Santa Monica Home', description: 'Sunny Santa Monica. We have hosted over 500 guests! All love our close proximity to the beach and the great food scene nearby. Ask us if you have any questions!', price: 234, lat: 34.024843, lng: -118.507535)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/sss.jpg", spot_id: Spot.fourth.id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/c.jpg", spot_id: Spot.fourth.id )

    Booking.create(start_date: '12-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.fourth.id)
    Booking.create(start_date: '23-04-2018', end_date: '25-04-2018', user_id: User.fourth.id, spot_id: Spot.fourth.id)
    Booking.create(start_date: '29-04-2018', end_date: '25-05-2018', user_id: User.first.id, spot_id: Spot.fourth.id)

    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 2, spot_id: Spot.fourth.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 2, spot_id: Spot.fourth.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 4, spot_id: Spot.fourth.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 5, spot_id: Spot.fourth.id, user_id: User.first.id)


  Spot.create(title: 'Beach Bungalow', description: 'Sunny beach bungalow in a great location in California. High in the sky and with stunning area, river or mountain views from every window, this beachside sub-penthouse is spacious and filled with radiant natural light. From the two North facing balconies you can relax and listen to the peaceful sounds of the waves breaking on the shore.', price: 755, lat: 34.010430, lng: -118.490884)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/kitchen.jpg", spot_id: Spot.fifth.id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/c.jpg", spot_id: Spot.fifth.id )

    Booking.create(start_date: '12-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.fifth.id)
    Booking.create(start_date: '21-04-2018', end_date: '24-04-2018', user_id: User.fourth.id, spot_id: Spot.fifth.id)
    Booking.create(start_date: '25-04-2018', end_date: '29-04-2018', user_id: User.third.id, spot_id: Spot.fifth.id)
    Booking.create(start_date: '31-04-2018', end_date: '12-05-2018', user_id: User.first.id, spot_id: Spot.fifth.id)

    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 3, spot_id: Spot.fifth.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 3, spot_id: Spot.fifth.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 4, spot_id: Spot.fifth.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.fifth.id, user_id: User.first.id)

  Spot.create(title: 'Beach House', description: 'A beach house. Solid living space for close proximity to everything you need. Do not hesitate to ask about any accomodation request' , price: 858, lat: 34.027081, lng: -118.509449)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/manning.jpg", spot_id: Spot.find(6).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/c.jpg", spot_id: Spot.find(6).id )

    Booking.create(start_date: '01-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.find(6).id)
    Booking.create(start_date: '21-04-2018', end_date: '19-05-2018', user_id: User.fourth.id, spot_id: Spot.find(6).id)
    Booking.create(start_date: '21-05-2018', end_date: '23-05-2018', user_id: User.third.id, spot_id: Spot.find(6).id)

    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 3, spot_id: Spot.find(6).id, user_id: User.first.id)
    Review.create(title: 'What a Solid place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 3, spot_id: Spot.find(6).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 4, spot_id: Spot.find(6).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.find(6).id, user_id: User.first.id)


  Spot.create(title: 'Manhattan Beach Home', description: 'One of the best beaches in the US. Visit the beach when you are here we are so close. The sunny weather and calming sea will be great for any of your travel purposes.', price: 575, lat: 33.889120, lng: -118.413420)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/ruballo.jpg", spot_id: Spot.find(7).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/c.jpg", spot_id: Spot.find(7).id )

    Booking.create(start_date: '01-04-2018', end_date: '19-04-2018', user_id: User.fourth.id, spot_id: Spot.find(7).id)
    Booking.create(start_date: '23-04-2018', end_date: '27-05-2018', user_id: User.third.id, spot_id: Spot.find(7).id)

    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.find(7).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 5, spot_id: Spot.find(7).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 2, spot_id: Spot.find(7).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 5, spot_id: Spot.find(7).id, user_id: User.first.id)

  # Australia ## start pictures here

  Spot.create(title: 'Gold Coast Beach Shack', description: 'A super nice shack next to the beach. Very solid. Close to everything you need on your stay with so much to do and see near by.',
    price: 425, lat: -28.062215, lng: 153.434658)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/bath.jpg", spot_id: Spot.find(8).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach2.jpg", spot_id: Spot.find(8).id )

    Booking.create(start_date: '01-04-2018', end_date: '10-04-2018', user_id: User.third.id, spot_id: Spot.find(8).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.find(8).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.fourth.id, spot_id: Spot.find(8).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.second.id, spot_id: Spot.find(8).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.third.id, spot_id: Spot.find(8).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.second.id, spot_id: Spot.find(8).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.find(8).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 4, spot_id: Spot.find(8).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 4, spot_id: Spot.find(8).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 4, spot_id: Spot.find(8).id, user_id: User.first.id)

  Spot.create(title: 'Beachside Haven', description: 'Beaches, surfers, clear beautiful Australian Waters. What else could you ask for? Maybe a great place to stay as well. Very spacious and beautiful.',
    price: 425, lat: -28.002019, lng: 153.400161)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/kitchen2.jpg", spot_id: Spot.find(9).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/living3.jpg", spot_id: Spot.find(9).id )

    Booking.create(start_date: '01-04-2018', end_date: '10-04-2018', user_id: User.second.id, spot_id: Spot.find(9).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.third.id, spot_id: Spot.find(9).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.second.id, spot_id: Spot.find(9).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.second.id, spot_id: Spot.find(9).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.fourth.id, spot_id: Spot.find(9).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.fourth.id, spot_id: Spot.find(9).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 5, spot_id: Spot.find(9).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 3, spot_id: Spot.find(9).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 3, spot_id: Spot.find(9).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.find(9).id, user_id: User.first.id)

  Spot.create(title: 'Perfect Location!', description: 'High in the sky and with stunning area, river or mountain views from every window, this beachside sub-penthouse is spacious and filled with radiant natural light. From the two North facing balconies you can relax and listen to the peaceful sounds of the waves breaking on the shore.',
    price: 425, lat: -28.047530, lng: 153.367836)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/living5.jpg", spot_id: Spot.find(10).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach9.jpg", spot_id: Spot.find(10).id )

    Booking.create(start_date: '01-04-2018', end_date: '10-04-2018', user_id: User.second.id, spot_id: Spot.find(10).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.first.id, spot_id: Spot.find(10).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.third.id, spot_id: Spot.find(10).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.fourth.id, spot_id: Spot.find(10).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.second.id, spot_id: Spot.find(10).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.fourth.id, spot_id: Spot.find(10).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.find(10).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 4, spot_id: Spot.find(10).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 4, spot_id: Spot.find(10).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 4, spot_id: Spot.find(10).id, user_id: User.first.id)

  Spot.create(title: 'Beachfront house in paradise', description: 'If you are wanting to be close to all the action and want to be able to relax in paradise then this is the place for you! Room is large and has its own balcony and television. Stay includes access to sandy beach and jetty. The main balcony overlooks the water and city lights!',
    price: 425, lat: -27.910711, lng: 153.402530)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/living.jpg", spot_id: Spot.find(11).id)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach5.jpg", spot_id: Spot.find(11).id)

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.second.id, spot_id: Spot.find(11).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.first.id, spot_id: Spot.find(11).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.third.id, spot_id: Spot.find(11).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.second.id, spot_id: Spot.find(11).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.fourth.id, spot_id: Spot.find(11).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.second.id, spot_id: Spot.find(11).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 3, spot_id: Spot.find(11).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 2, spot_id: Spot.find(11).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 3, spot_id: Spot.find(11).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.find(11).id, user_id: User.first.id)

  Spot.create(title: 'Luxury Beach Apartment', description: 'Enjoy & Maximise your stay in the heart of the Gold Coast with a private room in a modern renovated unit. Located right between Surfers and Broadbeach, short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 425, lat: -28.024933, lng: 153.430660)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/kitchen3.jpg", spot_id: Spot.find(12).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach4.jpg", spot_id: Spot.find(12).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.second.id, spot_id: Spot.find(12).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.find(12).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.third.id, spot_id: Spot.find(12).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.first.id, spot_id: Spot.find(12).id)
    Booking.create(start_date: '12-05-2018', end_date: '23-05-2018', user_id: User.fourth.id, spot_id: Spot.find(12).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.second.id, spot_id: Spot.find(12).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.find(12).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 4, spot_id: Spot.find(12).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 4, spot_id: Spot.find(12).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.find(12).id, user_id: User.first.id)

    # Miami
  Spot.create(title: 'Luxury Beach Apartment', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 231, lat: 25.815021, lng: -80.129815)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/living4.jpg", spot_id: Spot.find(13).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach6.jpg", spot_id: Spot.find(13).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.second.id, spot_id: Spot.find(13).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.find(13).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.second.id, spot_id: Spot.find(13).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.second.id, spot_id: Spot.find(13).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.second.id, spot_id: Spot.find(13).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.second.id, spot_id: Spot.find(13).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.find(13).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 4, spot_id: Spot.find(13).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 3, spot_id: Spot.find(13).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.find(13).id, user_id: User.first.id)

  Spot.create(title: 'South Beach Apartment', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 230, lat: 25.785955, lng: -80.135450)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/kitchen3.jpg", spot_id: Spot.find(14).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/bath.jpg", spot_id: Spot.find(14).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.second.id, spot_id: Spot.find(14).id)
    Booking.create(start_date: '14-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.find(14).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.second.id, spot_id: Spot.find(14).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.second.id, spot_id: Spot.find(14).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.second.id, spot_id: Spot.find(14).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.third.id, spot_id: Spot.find(14).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 5, spot_id: Spot.find(14).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 5, spot_id: Spot.find(14).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 4, spot_id: Spot.find(14).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 4, spot_id: Spot.find(14).id, user_id: User.first.id)

  Spot.create(title: 'Cozy Apartment!', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 524, lat: 25.813993, lng: -80.122559)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/bath2.jpg", spot_id: Spot.find(15).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach1.jpg", spot_id: Spot.find(15).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.third.id, spot_id: Spot.find(15).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.third.id, spot_id: Spot.find(15).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.second.id, spot_id: Spot.find(15).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.third.id, spot_id: Spot.find(15).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.third.id, spot_id: Spot.find(15).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.third.id, spot_id: Spot.find(15).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.find(15).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 2, spot_id: Spot.find(15).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 3, spot_id: Spot.find(15).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.find(15).id, user_id: User.first.id)

  Spot.create(title: 'Apartment close to South Beach', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 625, lat: 25.773390, lng: -80.132738)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/living.jpg", spot_id: Spot.find(16).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach6.jpg", spot_id: Spot.find(16).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.third.id, spot_id: Spot.find(16).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.third.id, spot_id: Spot.find(16).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.third.id, spot_id: Spot.find(16).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.third.id, spot_id: Spot.find(16).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.third.id, spot_id: Spot.find(16).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.third.id, spot_id: Spot.find(16).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 3, spot_id: Spot.find(16).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 5, spot_id: Spot.find(16).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 5, spot_id: Spot.find(16).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.find(16).id, user_id: User.first.id)

  Spot.create(title: 'Villa right on the Beach', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 999, lat: 25.788477, lng: -80.130029)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach7.jpg", spot_id: Spot.find(17).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/bath2.jpg", spot_id: Spot.find(17).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.third.id, spot_id: Spot.find(17).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.third.id, spot_id: Spot.find(17).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.third.id, spot_id: Spot.find(17).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.third.id, spot_id: Spot.find(17).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.third.id, spot_id: Spot.find(17).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.third.id, spot_id: Spot.find(17).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.find(17).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 4, spot_id: Spot.find(17).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 3, spot_id: Spot.find(17).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.find(17).id, user_id: User.first.id)

  Spot.create(title: 'Downtown Miami', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 800, lat: 25.784277, lng: -80.190995)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/living2.jpg", spot_id: Spot.find(18).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach9.jpg", spot_id: Spot.find(18).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.third.id, spot_id: Spot.find(18).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.third.id, spot_id: Spot.find(18).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.third.id, spot_id: Spot.find(18).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.third.id, spot_id: Spot.find(18).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.third.id, spot_id: Spot.find(18).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.third.id, spot_id: Spot.find(18).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 3, spot_id: Spot.find(18).id, user_id: User.third.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 4, spot_id: Spot.find(18).id, user_id: User.third.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 3, spot_id: Spot.find(18).id, user_id: User.third.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 4, spot_id: Spot.find(18).id, user_id: User.third.id)

  # Hawaii

  Spot.create(title: 'Downtown Honolulu Stay', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 790, lat: 21.285877, lng: -157.838643)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/bath2.jpg", spot_id: Spot.find(19).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/living5.jpg", spot_id: Spot.find(19).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.third.id, spot_id: Spot.find(19).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.third.id, spot_id: Spot.find(19).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.third.id, spot_id: Spot.find(19).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.third.id, spot_id: Spot.find(19).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.third.id, spot_id: Spot.find(19).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.third.id, spot_id: Spot.find(19).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 2, spot_id: Spot.find(19).id, user_id: User.third.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 3, spot_id: Spot.find(19).id, user_id: User.third.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 2, spot_id: Spot.find(19).id, user_id: User.third.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.find(19).id, user_id: User.third.id)


  Spot.create(title: 'Honolulu House with a view', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 650, lat: 21.273802, lng: -157.820060)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/living3.jpg", spot_id: Spot.find(20).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach2.jpg", spot_id: Spot.find(20).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.third.id, spot_id: Spot.find(20).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.third.id, spot_id: Spot.find(20).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.third.id, spot_id: Spot.find(20).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.third.id, spot_id: Spot.find(20).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.third.id, spot_id: Spot.find(20).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.third.id, spot_id: Spot.find(20).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 5, spot_id: Spot.find(20).id, user_id: User.third.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 5, spot_id: Spot.find(20).id, user_id: User.third.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 3, spot_id: Spot.find(20).id, user_id: User.third.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.find(20).id, user_id: User.third.id)

  Spot.create(title: 'Spacious House near Diamond Head', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 790, lat: 21.263725, lng: -157.786114)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/kitchen3.jpg", spot_id: Spot.find(21).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/living.jpg", spot_id: Spot.find(21).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.third.id, spot_id: Spot.find(21).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.third.id, spot_id: Spot.find(21).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.third.id, spot_id: Spot.find(21).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.third.id, spot_id: Spot.find(21).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.third.id, spot_id: Spot.find(21).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.third.id, spot_id: Spot.find(21).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.find(21).id, user_id: User.third.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 4, spot_id: Spot.find(21).id, user_id: User.third.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 3, spot_id: Spot.find(21).id, user_id: User.third.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.find(21).id, user_id: User.third.id)

  Spot.create(title: 'Large House near Hanauma', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 500, lat: 21.265411, lng: -157.710333)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/kitchen2.jpg", spot_id: Spot.find(22).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/living5.jpg", spot_id: Spot.find(22).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.third.id, spot_id: Spot.find(22).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.third.id, spot_id: Spot.find(22).id)
    Booking.create(start_date: '22-04-2018', end_date: '28-04-2018', user_id: User.third.id, spot_id: Spot.find(22).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.third.id, spot_id: Spot.find(22).id)
    Booking.create(start_date: '13-05-2018', end_date: '22-05-2018', user_id: User.third.id, spot_id: Spot.find(22).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.third.id, spot_id: Spot.find(22).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 5, spot_id: Spot.find(22).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 4, spot_id: Spot.find(22).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 4, spot_id: Spot.find(22).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.find(22).id, user_id: User.first.id)


  Spot.create(title: 'Waimanalo Beach Apartment', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 350, lat: 21.335071, lng: -157.698762)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach1.jpg", spot_id: Spot.find(23).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/bath2.jpg", spot_id: Spot.find(23).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.second.id, spot_id: Spot.find(23).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.find(23).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.second.id, spot_id: Spot.find(23).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.second.id, spot_id: Spot.find(23).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.second.id, spot_id: Spot.find(23).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.second.id, spot_id: Spot.find(23).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.find(23).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 5, spot_id: Spot.find(23).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 4, spot_id: Spot.find(23).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 4, spot_id: Spot.find(23).id, user_id: User.second.id)

  Spot.create(title: 'Tropical Adventure Getaway', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 350, lat: 21.363659, lng: -157.846569)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/bath.jpg", spot_id: Spot.find(24).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach1.jpg", spot_id: Spot.find(24).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.second.id, spot_id: Spot.find(24).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.find(24).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.second.id, spot_id: Spot.find(24).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.second.id, spot_id: Spot.find(24).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.second.id, spot_id: Spot.find(24).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.second.id, spot_id: Spot.find(24).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.find(24).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 4, spot_id: Spot.find(24).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 3, spot_id: Spot.find(24).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.find(24).id, user_id: User.first.id)

  # Bali

  Spot.create(title: 'Bali Beach Shack', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 300, lat: -8.794189, lng: 115.128846)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/kitchen.jpg", spot_id: Spot.find(25).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/living3.jpg", spot_id: Spot.find(25).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.first.id, spot_id: Spot.find(25).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.third.id, spot_id: Spot.find(25).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.third.id, spot_id: Spot.find(25).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.third.id, spot_id: Spot.find(25).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.third.id, spot_id: Spot.find(25).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.third.id, spot_id: Spot.find(25).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 2, spot_id: Spot.find(25).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 3, spot_id: Spot.find(25).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 2, spot_id: Spot.find(25).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.find(25).id, user_id: User.first.id)

  Spot.create(title: 'Clean & Large Apartment', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 190, lat: -8.714733, lng: 115.168624)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/kitchen5.jpg", spot_id: Spot.find(26).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/bath2.jpg", spot_id: Spot.find(26).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.second.id, spot_id: Spot.find(26).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.find(26).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.second.id, spot_id: Spot.find(26).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.second.id, spot_id: Spot.find(26).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.second.id, spot_id: Spot.find(26).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.second.id, spot_id: Spot.find(26).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.find(26).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 4, spot_id: Spot.find(26).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 5, spot_id: Spot.find(26).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.find(26).id, user_id: User.second.id)

  Spot.create(title: 'Apartment close to the Beach', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 250, lat: -8.796326, lng: 115.230953)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach9.jpg", spot_id: Spot.find(27).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/kitchen2.jpg", spot_id: Spot.find(27).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.second.id, spot_id: Spot.find(27).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.find(27).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.second.id, spot_id: Spot.find(27).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.second.id, spot_id: Spot.find(27).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.second.id, spot_id: Spot.find(27).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.second.id, spot_id: Spot.find(27).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 3, spot_id: Spot.find(27).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 4, spot_id: Spot.find(27).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 4, spot_id: Spot.find(27).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.find(27).id, user_id: User.second.id)

  Spot.create(title: 'Beachside Villa', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 250, lat: -8.843327, lng: 115.181406)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/bath.jpg", spot_id: Spot.find(28).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/c.jpg", spot_id: Spot.find(28).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.second.id, spot_id: Spot.find(28).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.find(28).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.second.id, spot_id: Spot.find(28).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.second.id, spot_id: Spot.find(28).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.second.id, spot_id: Spot.find(28).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.second.id, spot_id: Spot.find(28).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.find(28).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 3, spot_id: Spot.find(28).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 4, spot_id: Spot.find(28).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.find(28).id, user_id: User.second.id)

  Spot.create(title: 'Geger Beach Apartment', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 250, lat: -8.817080, lng: 115.220214)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/living4.jpg", spot_id: Spot.find(29).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/c.jpg", spot_id: Spot.find(29).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.second.id, spot_id: Spot.find(29).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.find(29).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.second.id, spot_id: Spot.find(29).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.second.id, spot_id: Spot.find(29).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.second.id, spot_id: Spot.find(29).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.second.id, spot_id: Spot.find(29).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 3, spot_id: Spot.find(29).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 3, spot_id: Spot.find(29).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 3, spot_id: Spot.find(29).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.find(29).id, user_id: User.second.id)

  Spot.create(title: 'Room near Nusa Dua', description: 'Enjoy & Maximise your stay in the heart of the beach area with a private room in a modern renovated unit. Located right between the most popular two beaches, a short walk to the beach, public transport, restaurants, nightlife and attractions!',
    price: 250, lat: -8.805740, lng: 115.229818)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/beach2.jpg", spot_id: Spot.find(30).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/living5.jpg", spot_id: Spot.find(30).id )

    Booking.create(start_date: '01-04-2018', end_date: '11-04-2018', user_id: User.second.id, spot_id: Spot.find(30).id)
    Booking.create(start_date: '15-04-2018', end_date: '19-04-2018', user_id: User.second.id, spot_id: Spot.find(30).id)
    Booking.create(start_date: '23-04-2018', end_date: '28-04-2018', user_id: User.second.id, spot_id: Spot.find(30).id)
    Booking.create(start_date: '03-05-2018', end_date: '12-05-2018', user_id: User.second.id, spot_id: Spot.find(30).id)
    Booking.create(start_date: '13-05-2018', end_date: '23-05-2018', user_id: User.second.id, spot_id: Spot.find(30).id)
    Booking.create(start_date: '24-05-2018', end_date: '28-05-2018', user_id: User.second.id, spot_id: Spot.find(30).id)

    Review.create(title: 'What a great place', body: 'Everything was perfect! We had a nice bedroom, delicious breakfast every morning and the house has a very nice pool area. It is close to everything.', rating: 4, spot_id: Spot.find(30).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'Wonderfully great spot. Nice place with a great view and proximity to great attractions.', rating: 3, spot_id: Spot.find(30).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'What a great host and we all felt like we were at home when we walked through the door. Sooo close to surfers. It was awesome. Thanks again.', rating: 4, spot_id: Spot.find(30).id, user_id: User.second.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.find(30).id, user_id: User.second.id)
