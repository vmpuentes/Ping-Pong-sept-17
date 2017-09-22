# _Ping Pong Project_

#### _ 09.22.17_

#### By _**Victor M. Puentes Jr.,**_

## Description

_This web application will that a number from a user and return a range of numbers from 1 to the chosen number with the following exceptions:

Numbers divisible by 3 are replaced with "ping"
Numbers divisible by 5 are replaced with "pong"
Numbers divisible by 15 are replaced with "ping-pong"
A user will be able to enter a new number and see new results over and over again.._
## Specifications 
| Behavior  | Input  | Output  |
|---|---|---|
|1. User enters a number and it is returned | 2 | 2 |
|2. User enters a number and it is returned with all whole integers that preceeded it. | 2 | 1, 2 |
|3. User enters the number 3 and it is replaced by the word "ping". | 3 | "ping" |
|4. User enters the number 5 and it is replaced by the word "pong". | 5 | "pong" |
|5. User enters the number 15 and it is replaced by the words "ping=pong". | 15 | "ping-pong" |
|6. User enters the number 3, it is replaced by "ping" and output display also shows all whole integers preceeding it. | 3 | 1,2,"ping" |
|7. User enters the number 5, it is replaced by "pong", 3 is replaced by "ping", and output display still shows all whole integers preceeding it. | 5 | "pong", 4, "ping", 2, 1 |
|8. User enters the number 6, it is replaced by "ping", 5 is replaced by "pong", 3 is replaced by "ping", and output display still shows all whole integers preceeding it.| 6 | 6, "pong", 4, "ping", 2, 1 |
|9. User enters the number 15, it is replaced by "ping-pong", the numbers 12,9,6, and 3 are replaced by "ping", the numbers 10 and 5 are replaced by the word "pong". | 15 | "ping-pong", 14, 13, "ping", 11, "pong", "ping", 8, 7 , "ping", "pong", 4, "ping", 2, 1 |
|10. User enters any number and the output display will show all numbers divisible by 3 are replaced with "ping", all numbers divisible by 5 are replaced with "pong", and all numbers divisible by 15 are replaced with "ping-pong". | 16 | 16,"ping-pong", 14, 13, "ping", 11, "pong", "ping", 8, 7 , "ping", "pong", 4, "ping", 2, 1
|11. A user will be able to enter a new number  | user enters new number | a new result will appear, the old result will be replaced. |

## Getting Started

May be deployed using git hub pages at  https://vmpuentes.github.io/Ping-Pong-Project-sept-17/.

### Prerequisites

What do you need to see this page?

```
An updated web browser of your choice.
```

## Built With

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used to contruct this webpage
* [CSS3](http://html.com/css/) - Used to style
* [Javascript] (https://www.javascript.com/) - Used for user interactives
* [Jquery](https://jquery.com/) - Javascript library used
* [Bootstrap](http://getbootstrap.com/) - CSS library used

## Authors

* **Victor M. Puentes Jr.** - *Initial work* - [github user name: vmpuentes](https://github.com/vmpuentes)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Epicodus (https://epicodus.com/)
* free Code Camp (https://freecodecamp.com/)
* Software Engineering Daily (https://softwareengineeringdaily.com/)
