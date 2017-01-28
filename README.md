# service-session-proxy

Generate session with `endpoint` and `expire` date to proxy any request to the `endpoint` URL.

## API

```apib
# POST /session

+ Request new session (application/json)
        {
            "endpoint": "http://123.65.98.32:8080/v2/myapp",
            "expire: "123434579"
        }

+ Response 201 (application/json)
        {
            "session_id": "123abc",
            "session_url": "https://domain.com/session/123abc"
        }
```
