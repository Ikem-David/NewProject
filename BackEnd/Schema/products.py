from pydantic import BaseModel
from typing import Optional
class ProductBase(BaseModel):
    name : str
    price : float
    stock : int

class ProductResponse(ProductBase):
    class Config:
        from_attributes = True

class CreateProduct(ProductBase):
    pass

class UpdateProduct(BaseModel):
    name : Optional[str] = None
    price : Optional[float] = None
    stock : Optional[int] = None

class DeleteProduct(BaseModel):
    id : int