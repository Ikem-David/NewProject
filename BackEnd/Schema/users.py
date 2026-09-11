from pydantic import BaseModel
from typing import Optional

class UserBase(BaseModel):
    username : str
    email : int

class UserResponse(UserBase):
    class Config:
        from_attributes = True

class CreateUser(UserBase):
    password : str

class UpdateUser(BaseModel):
    username : Optional[str]
    email : Optional[int]
    password : Optional[str]

class DeleteUser(BaseModel):
    id : int