class Tag < ApplicationRecord
  has_many :taggings
  has_many :articles, through: :taggings
  def to_param
    [id, name.parameterize].join("-")
  end
end
