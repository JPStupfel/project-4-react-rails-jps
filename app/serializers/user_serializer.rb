class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :image, :age
end
