class SequenceSerializer < ActiveModel::Serializer
  attributes :id, :parent_id, :child_id
end
