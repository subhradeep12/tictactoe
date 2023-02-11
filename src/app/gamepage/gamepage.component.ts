import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { startWith } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./gamepage.component.html",
  styleUrls: ["./gamepage.component.css"]
})
export class GamepageComponent implements OnInit{

  constructor( private router: Router, private route: ActivatedRoute){}

  board = [["", "", ""], ["", "", ""], ["", "", ""]];
  start = true;
  n = 0;
  winner = "";
  winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  player1: any = []
  player2: any = []
  p1: any = ""
  p2: any = ""
  isCross = this.start;
  startWith !: FormControl;
  player = false
  

  ngOnInit() {
    this.startWith = new FormControl(this.start);
    this.startWith.valueChanges.pipe(startWith(this.start)).subscribe(value => {
      this.newGame();
      this.p1 = this.route.snapshot.paramMap.get("p1");
      this.p2 = this.route.snapshot.paramMap.get("p2");
    });
  }

  onclick(x: number, y: number) {
    if (this.board[x][y] === "" && this.winner == "") {
      if (this.isCross) {
        this.board[x][y] = "X";
        this.isCross = false;
        this.n = x*3 + y;
        this.player1.push(this.n);
      } else {
        this.board[x][y] = "O";
        this.isCross = true;
        this.n = x*3 + y;
        this.player2.push(this.n);
      }
    }
    this.winner = this.playerWon();
    if(this.winner == "" && this.player1.length+this.player2.length == 9)
    {
      this.winner = "No player won"
    }
  }

  reset() {
    this.newGame();
  }

  newGame() {
    this.board = [["", "", ""],["", "", ""],["", "", ""]];
    this.isCross = this.startWith.value;
    this.player1 = []
    this.player2 = []
    this.winner = ""
  }
  playerWon(): any
  {
    for (let i = 0; i < this.winning.length; i++) {
      if (this.player1.includes(this.winning[i][0]) && this.player1.includes(this.winning[i][1]) && this.player1.includes(this.winning[i][2])) {
        this.player = true
        return this.p1
      }
      else if(this.player2.includes(this.winning[i][0]) && this.player2.includes(this.winning[i][1]) && this.player2.includes(this.winning[i][2]))
      {
        this.player = true
        return this.p2
      }
    }
    return ""
  }
}
