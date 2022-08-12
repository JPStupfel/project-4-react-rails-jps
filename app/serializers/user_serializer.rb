class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :image, :age, :password_digest


end
