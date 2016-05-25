# Do not use `moment()`, use `moment().utc()` (no-moment-without-utc)

Imagine you have a service where your user can post todos for each day and your
user is in Germany and your servers are in Ireland. Of course you use [moment]()
for date parsing and manipulation

```js
// Client in Germany

const date = moment('2016-05-29') // 2016-05-28T22:00:00.000Z

axios.post('www.host-somewhere-in-ireland.com/daily-todos', {
  date: date,
  todos: [
    'Go to Church.'
  ]
})
```

```js
// Server Ireland

routes.post('/daily-todos', function (request, response) {
  const date = moment(request.body.date) // 2016-05-28T22:00:00.000Z
})
```

Whoops, the user will be pretty lonely when going to church on a Saturday 😢

To work around this use `moment.utc(…)`

## Rule Details

This rule aims to...

The following patterns are considered warnings:

```js
moment(…)
```

The following patterns are not warnings:

```js
moment.utc(…)
```

## When Not To Use It

Dunno

## Further Reading

*   [https://gist.github.com/despairblue/67e65fbb6d5a6a45545fce7f44148722](https://gist.github.com/despairblue/67e65fbb6d5a6a45545fce7f44148722)
