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
  Cypress Cove is less than a mile drive and Pepperdine and Camarillo Premium Outlets are a 20 minute drive.', price: 250, lat: 33.844337, lng: -118.394661)

  Spot.create(title: 'Malibu Getaway', description: 'Amazing Malibu destination', price: 250, lat: 34.019956, lng: -118.824270)
  Spot.create(title: 'West LA apartment', description: 'Sunny Los Angeles place with great access to other places', price: 250, lat: 34.035061, lng: -118.431662)

  Booking.delete_all
  Booking.create(start_date: '12-06-2018', end_date: '19-06-2018', user_id: User.first.id, spot_id: Spot.first.id)
