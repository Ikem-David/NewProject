from pydantic import BaseModel
from datetime import datetime
class PurchasesBase(BaseModel):
    total_price:float
class PurchaseResponse(PurchasesBase):
    id:int
    user_id:int
    created_at:datetime
    class Config:
        from_attributes = True