from typing import Optional
from pydantic import BaseModel

class PurchaseItemResponse(BaseModel):
    id: int
    purchase_id: int
    product_id: int
    quantity: int
    price:float 

    class Config:
        from_attributes = True
class CreatePurchaseItem(BaseModel):
    purchase_id: int
    product_id: int
    quantity: int
    price: float
class UpdatePurchaseItem(BaseModel):
    quantity: Optional[int] = None
    price: Optional[float] = None
