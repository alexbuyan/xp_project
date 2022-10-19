from fastapi import APIRouter


router = APIRouter()


@router.get("/")
def read_root():
    """Description."""
    return {"data": "heeeeelp"}
