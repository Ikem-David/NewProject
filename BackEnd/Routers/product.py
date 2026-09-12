from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from Database.DB_Methods import products as product_methods
from Database.db import get_db
from Schema import products

router = APIRouter(prefix="/product",tags=['Product'])


@router.get("/", response_model=list[products.ProductResponse])
def read_products(db: Session = Depends(get_db)):
	return product_methods.get_all_products(db)


@router.get("/name/{name}", response_model=products.ProductResponse)
def read_product_by_name(name: str, db: Session = Depends(get_db)):
	product = product_methods.get_product_by_name(db, name)
	if product is None:
		raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")
	return product


@router.get("/{product_id}", response_model=products.ProductResponse)
def read_product(product_id: int, db: Session = Depends(get_db)):
	product = product_methods.get_product(db, product_id)
	if product is None:
		raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")
	return product


@router.post("/", response_model=products.ProductResponse, status_code=status.HTTP_201_CREATED)
def create_product(req: products.CreateProduct, db: Session = Depends(get_db)):
	if product_methods.get_product_by_name(db, req.name) is not None:
		raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Product name already exists")

	return product_methods.create_product(db, req)


@router.put("/{product_id}", response_model=products.ProductResponse)
def update_product(product_id: int, req: products.UpdateProduct, db: Session = Depends(get_db)):
	product = product_methods.update_product(db, product_id, req)
	if product is None:
		raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")
	return product


@router.delete("/{product_id}", response_model=products.ProductResponse)
def delete_product(product_id: int, db: Session = Depends(get_db)):
	product = product_methods.delete_product(db, product_id)
	if product is None:
		raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")
	return product