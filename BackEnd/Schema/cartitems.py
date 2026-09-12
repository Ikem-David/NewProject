from pydantic import BaseModel
from typing import Optional
class CartResponse(BaseModel):
    id: int
    user_id : int
    product_id : int
    quantity : int
    class Config:
        from_attributes = True
class CreateCartItem(BaseModel):
    user_id: int
    product_id: int
    quantity: int = 1
class UpdateCartItem(BaseModel):
    quantity: Optional[int] = None