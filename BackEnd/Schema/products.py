from pydantic import BaseModel
from typing import Optional
class ProductBase(BaseModel):
    name : str
    quantity : int
    stock : int

class ProductResponse(ProductBase):
    class Config:
        from_attributes = True

class CreateProduct(ProductBase):
    pass

class UpdateProduct(BaseModel):
    name : Optional[str]
    quantity : Optional[int]
    stock : Optional[int]

class DeleteProduct(BaseModel):
    id : int