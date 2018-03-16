# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  require 'faker'
  User.delete_all
  Spot.delete_all
  Booking.delete_all
  Review.delete_all
  SpotImage.delete_all

  User.create(email: 'worldtraveler@onlywarmplaces.com', first_name: 'Dan', last_name: 'Kang', image_url: 'demo.jpg', password: '123456')

  Spot.create(title: '180-Degree Ocean View in Paradise West Malibu', description: 'Directly above the see on a hilltop of its own there is a Shangri-La where the sun rises and sets and the ocean meets the sky. It is only a short walk down to Nicholas Canyon Beach but here you are in another world. This contemporary Mediterranean home has breathtaking views of the sea and mountains yet the best beaches, restaurants and shops are within minutes driving distance.
  Cypress Cove is less than a mile drive and Pepperdine and Camarillo Premium Outlets are a 20 minute drive.', price: 150, lat: 33.844337, lng: -118.394661)

    Booking.create(start_date: '12-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.first.id)

    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.first.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.first.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.first.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.first.id, user_id: User.first.id)


    SpotImage.create(image_url: "https://images.unsplash.com/photo-1463714179529-808685e81a6e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6afa77bcd5066d73d0e7d3854bcf1b4&auto=format&fit=crop&w=1050&q=80", spot_id: Spot.first.id)
    SpotImage.create(image_url: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91b874ce453385d8867cc98ee582fee3&auto=format&fit=crop&w=1955&q=80", spot_id: Spot.first.id )


  Spot.create(title: 'Malibu Getaway', description: 'Amazing Malibu destination. Amazing Malibu destination.Amazing Malibu destination.Amazing Malibu destination. Amazing Malibu destination. Amazing Malibu destination.', price: 277, lat: 34.019956, lng: -118.824270)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/photo-1512212621149-107ffe572d2f.jpeg", spot_id: Spot.second.id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/photo-1501183638710-841dd1904471.jpeg", spot_id: Spot.second.id )

    Booking.create(start_date: '12-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.second.id)
    Booking.create(start_date: '12-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.second.id)

    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.second.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.second.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.second.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.second.id, user_id: User.first.id)



  Spot.create(title: 'West LA apartment', description: 'Sunny Los Angeles place with great access to other places. Sunny Los Angeles place with great access to other places. Sunny Los Angeles place with great access to other places. Sunny Los Angeles place with great access to other places. Sunny Los Angeles place with great access to other places. Sunny Los Angeles place with great access to other places', price: 50, lat: 34.035061, lng: -118.431662)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/sss.jpg", spot_id: Spot.third.id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/c.jpg", spot_id: Spot.third.id )

    Booking.create(start_date: '12-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.third.id)
    Booking.create(start_date: '12-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.third.id)

    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.third.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.third.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.third.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.third.id, user_id: User.first.id)


  Spot.create(title: 'Santa Monica Home', description: 'Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica', price: 234, lat: 34.026265, lng: -118.497149)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/sss.jpg", spot_id: Spot.fourth.id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/c.jpg", spot_id: Spot.fourth.id )

    Booking.create(start_date: '12-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.fourth.id)
    Booking.create(start_date: '12-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.fourth.id)

    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.fourth.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.fourth.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.fourth.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.fourth.id, user_id: User.first.id)


  Spot.create(title: 'Beach Bungalow', description: 'Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica', price: 858, lat: 34.023081, lng: -118.507449)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/sss.jpg", spot_id: Spot.fifth.id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/c.jpg", spot_id: Spot.fifth.id )

    Booking.create(start_date: '12-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.fifth.id)
    Booking.create(start_date: '12-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.fifth.id)

    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.fifth.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.fifth.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.fifth.id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.fifth.id, user_id: User.first.id)

  Spot.create(title: 'Beach Bungalow', description: 'Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica', price: 858, lat: 34.027081, lng: -118.509449)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/manning.jpg", spot_id: Spot.find(6).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/c.jpg", spot_id: Spot.find(6).id )

    Booking.create(start_date: '12-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.find(6).id)
    Booking.create(start_date: '12-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.find(6).id)

    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.find(6).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.find(6).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.find(6).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.find(6).id, user_id: User.first.id)


  Spot.create(title: 'Manhattan Beach Apartment', description: 'Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica Sunny Santa Monica', price: 575, lat: 33.889120, lng: -118.413420)
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/ruballo.jpg", spot_id: Spot.find(7).id )
    SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/c.jpg", spot_id: Spot.find(7).id )

    Booking.create(start_date: '12-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.find(7).id)
    Booking.create(start_date: '12-03-2018', end_date: '19-03-2018', user_id: User.first.id, spot_id: Spot.find(7).id)

    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.find(7).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.find(7).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.find(7).id, user_id: User.first.id)
    Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.find(7).id, user_id: User.first.id)
