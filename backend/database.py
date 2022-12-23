import motor.motor_asyncio
import os

client = motor.motor_asyncio.AsyncIOMotorClient(os.environ.get('DB_URI'))

database = client.auction_site

print(database)