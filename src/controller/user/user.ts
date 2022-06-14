import { Request, Response } from 'express'

export const users = (req: Request, res: Response) => {
    console.log(req.body, "reqqqq")
    if(req.body.page == 1) {
        return res.send({
            "status": true,
            "data": {
                "pagination": {
                    "page": 1,
                    "limit": 10,
                    "total": 12
                },
                "users": [
                    {
                        "name": "Sai",
                        "designation": "UX Engineer",
                        "mobile": 987654356,
                        "email": "sai@ap.com",
                        "joinedDate": "26-06-1995",
                        "city": "Rajahmundry",
                        "room": 201,
                        "picture": "https://placeimg.com/400/300/any"
                    },
                    {
                        "name": "Rajitha",
                        "designation": "UX Engineer",
                        "mobile": 987654356,
                        "email": "Rajitha@tg.com",
                        "joinedDate": "26-06-1995",
                        "city": "Yadadri",
                        "room": 202,
                        "picture": "https://placeimg.com/400/300/any"
                    },
                    {
                        "name": "Sagar",
                        "designation": "UX Engineer",
                        "mobile": 987654356,
                        "email": "Sagar@nzm.com",
                        "joinedDate": "26-06-1995",
                        "city": "Nizambad",
                        "room": 203,
                        "picture": "https://placeimg.com/400/300/any"
                    },
                    {
                        "name": "Pavan",
                        "designation": "UX Engineer",
                        "mobile": 987654356,
                        "email": "Pavan@rgm.com",
                        "joinedDate": "26-06-1995",
                        "city": "Rangampet",
                        "room": 204,
                        "picture": "https://placeimg.com/400/300/any"
                    },
                    {
                        "name": "Mike",
                        "designation": "Student",
                        "mobile": 987654356,
                        "email": "nike@hk.com",
                        "joinedDate": "26-06-1995",
                        "city": "Hawkins",
                        "room": 201,
                        "picture": "https://placeimg.com/400/300/any"
                    },
                    {
                        "name": "Dustin",
                        "designation": "Scientist",
                        "mobile": 987654356,
                        "email": "dustin@hk.com",
                        "joinedDate": "26-06-1995",
                        "city": "Hawkins",
                        "room": 201,
                        "picture": "https://placeimg.com/400/300/any"
                    },
                    {
                        "name": "Lucas",
                        "designation": "Basketball Player",
                        "mobile": 987654356,
                        "email": "lucas@hk.com",
                        "joinedDate": "26-06-1995",
                        "city": "Hawkins",
                        "room": 201,
                        "picture": "https://placeimg.com/400/300/any"
                    },
                    {
                        "name": "Eleven",
                        "designation": "Neuro Controller",
                        "mobile": 987654356,
                        "email": "eleven@el.com",
                        "joinedDate": "26-06-1995",
                        "city": "Hawkins",
                        "room": 202,
                        "picture": "https://placeimg.com/400/300/any"
                    },
                    {
                        "name": "William Byer",
                        "designation": "UX Engineer",
                        "mobile": 987654356,
                        "email": "will@las.com",
                        "joinedDate": "26-06-1995",
                        "city": "Alaska",
                        "room": 203,
                        "picture": "https://placeimg.com/400/300/any"
                    },
                    {
                        "name": "Maxine",
                        "designation": "Student",
                        "mobile": 987654356,
                        "email": "Maxine@clf.com",
                        "joinedDate": "26-06-1995",
                        "city": "California",
                        "room": 202,
                        "picture": "https://placeimg.com/400/300/any"
                    }
                ]
            }
        })
    } else {
        return res.send({
            "status": true,
            "data": {
                "pagination": {
                    "page": 2,
                    "limit": 10,
                    "total": 12
                },
                "users": [
                    {
                        "name": "Steve",
                        "designation": "Ice Cream Seller",
                        "mobile": 987654356,
                        "email": "steve@hk.com",
                        "joinedDate": "26-06-1995",
                        "city": "Hawkins",
                        "room": 204,
                        "picture": "https://placeimg.com/400/300/any"
                    },
                    {
                        "name": "Billy",
                        "designation": "Swim Master",
                        "mobile": 987654356,
                        "email": "billy@clf.com",
                        "joinedDate": "26-06-1995",
                        "city": "California",
                        "room": 204,
                        "picture": "https://placeimg.com/400/300/any"
                    }
                ]
            }
        })
    }

}