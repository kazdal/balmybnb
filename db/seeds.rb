# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  require 'faker'
  User.delete_all
  User.create(email: 'demo@demo.com', first_name: 'Dan', last_name: 'Kang', image_url: 'demo.jpg', password: '123456')

  Spot.delete_all
  Spot.create(title: '180-Degree Ocean View in Paradise West Malibu', description: 'Directly above the see on a hilltop of its own there is a Shangri-La where the sun rises and sets and the ocean meets the sky. It is only a short walk down to Nicholas Canyon Beach but here you are in another world. This contemporary Mediterranean home has breathtaking views of the sea and mountains yet the best beaches, restaurants and shops are within minutes driving distance.
  Cypress Cove is less than a mile drive and Pepperdine and Camarillo Premium Outlets are a 20 minute drive.', price: 250, location: '300000 Pacific Coast Hwy, Malibu, CA 90265-3601')

  Spot.create(title: Faker::Address.community, description: Faker::Hipster.sentence(3), price: Faker::Number.number(3), location: Faker::Address.street_address)
  Spot.create(title: Faker::Address.community, description: Faker::Hipster.sentence(3), price: Faker::Number.number(3), location: Faker::Address.street_address)
  Spot.create(title: Faker::Address.community, description: Faker::Hipster.sentence(3), price: Faker::Number.number(3), location: Faker::Address.street_address)
  Spot.create(title: Faker::Address.community, description: Faker::Hipster.sentence(3), price: Faker::Number.number(3), location: Faker::Address.street_address)
  Spot.create(title: Faker::Address.community, description: Faker::Hipster.sentence(3), price: Faker::Number.number(3), location: Faker::Address.street_address)
  Spot.create(title: Faker::Address.community, description: Faker::Hipster.sentence(3), price: Faker::Number.number(3), location: Faker::Address.street_address)
  Spot.create(title: Faker::Address.community, description: Faker::Hipster.sentence(3), price: Faker::Number.number(3), location: Faker::Address.street_address)


  Spot.create(title: 'test', description: 'testing', price: 250, location: '3s00000 Pacific Coast Hwy, Malibu, CA 90265-3601')
