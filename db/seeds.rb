# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  require 'faker'
  User.delete_all
  User.create(email: 'worldtraveler@onlywarmplaces.com', first_name: 'Dan', last_name: 'Kang', image_url: 'demo.jpg', password: '123456')

  Spot.delete_all
  Spot.create(title: '180-Degree Ocean View in Paradise West Malibu', description: 'Directly above the see on a hilltop of its own there is a Shangri-La where the sun rises and sets and the ocean meets the sky. It is only a short walk down to Nicholas Canyon Beach but here you are in another world. This contemporary Mediterranean home has breathtaking views of the sea and mountains yet the best beaches, restaurants and shops are within minutes driving distance.
  Cypress Cove is less than a mile drive and Pepperdine and Camarillo Premium Outlets are a 20 minute drive.', price: 150, lat: 33.844337, lng: -118.394661)

  Spot.create(title: 'Malibu Getaway', description: 'Amazing Malibu destination', price: 250, lat: 34.019956, lng: -118.824270)
  Spot.create(title: 'West LA apartment', description: 'Sunny Los Angeles place with great access to other places', price: 50, lat: 34.035061, lng: -118.431662)

  Booking.delete_all
  Booking.create(start_date: '12-06-2018', end_date: '19-06-2018', user_id: User.first.id, spot_id: Spot.first.id)

  Review.delete_all

  Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.first.id, user_id: User.first.id)
  Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 3, spot_id: Spot.first.id, user_id: User.first.id)
  Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 2, spot_id: Spot.first.id, user_id: User.first.id)
  Review.create(title: 'What a great place', body: 'Such a nice place. Nicer than I expected. So very nice.', rating: 5, spot_id: Spot.first.id, user_id: User.first.id)

  SpotImage.create(image_url: "https://images.unsplash.com/photo-1463714179529-808685e81a6e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6afa77bcd5066d73d0e7d3854bcf1b4&auto=format&fit=crop&w=1050&q=80", spot_id: Spot.first.id)
  SpotImage.create(image_url: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91b874ce453385d8867cc98ee582fee3&auto=format&fit=crop&w=1955&q=80", spot_id: Spot.first.id )

  SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/photo-1512212621149-107ffe572d2f.jpeg", spot_id: Spot.second.id )
  SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/photo-1501183638710-841dd1904471.jpeg", spot_id: Spot.second.id )

  SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/sss.jpg", spot_id: Spot.third.id )
  SpotImage.create(image_url: "https://s3.amazonaws.com/balmybnb-dev/c.jpg", spot_id: Spot.third.id )
