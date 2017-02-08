import redis

r = redis.Strict(host='localhost', port=6379, db=0)

def add_contact(key, value):
    r.set(key, value)

def remove_contact(key):
    r.delete(key)

def update_contact(key, value):
    r.set(key, value)

def read_contacts(key):
    r.get(key)


