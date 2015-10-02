/**
 * 
 */
var cb = new Array();
var currTag;

function createImage(src, id) {
	var img = document.createElement('img');
	img.setAttribute('src', src);
	if (id != null)
		img.setAttribute('id', id);
	img.setAttribute('width', '98px');
	img.setAttribute('height', '98px');
	return img;
}
/**
 * 
 */
function initiateChessBroad() {
	var element;
	/* for white army */
	var i, j;
	var char;
	for (i = 0; i < 9; i++) {
		cb[i] = new Array();
		if (i == 0)
			continue;
		for (j = 0; j < 9; j++) {
			if (j == 0)
				continue;
			cb[i][j] = '';
			switch (j) {
			case 1:
				char = 'a';
				break;
			case 2:
				char = 'b';
				break;
			case 3:
				char = 'c';
				break;
			case 4:
				char = 'd';
				break;
			case 5:
				char = 'e';
				break;
			case 6:
				char = 'f';
				break;
			case 7:
				char = 'g';
				break;
			case 8:
				char = 'h';
				break;
			default:
				break;
			}
			cb[i][j] = 'cell-' + i + char;
		}
	}
	e = document.getElementById('cell-2a');
	// /cb[2][1] = 'cell-2a';
	e.appendChild(createImage('image/wP.png', 'wP-1'));
	e = document.getElementById('cell-2b');
	// cb[2][2] = 'cell-2b';
	e.appendChild(createImage('image/wP.png', 'wP-2'));
	e = document.getElementById('cell-2c');
	// /cb[2][3] = 'cell-2c';
	e.appendChild(createImage('image/wP.png', 'wP-3'));
	e = document.getElementById('cell-2d');
	// cb[2][4] = 'cell-2d';
	e.appendChild(createImage('image/wP.png', 'wP-4'));
	e = document.getElementById('cell-2e');
	// cb[2][5] = 'cell-2e';
	e.appendChild(createImage('image/wP.png', 'wP-5'));
	e = document.getElementById('cell-2f');
	// cb[2][6] = 'cell-2f';
	e.appendChild(createImage('image/wP.png', 'wP-6'));
	e = document.getElementById('cell-2g');
	// cb[2][7]
	e.appendChild(createImage('image/wP.png', 'wP-7'));
	e = document.getElementById('cell-2h');
	e.appendChild(createImage('image/wP.png', 'wP-8'));

	e = document.getElementById('cell-1a');
	e.appendChild(createImage('image/wR.png', 'wR-1'));
	e = document.getElementById('cell-1b');
	e.appendChild(createImage('image/wN.png', 'wN-1'));

	e = document.getElementById('cell-1c');
	e.appendChild(createImage('image/wB.png', 'wB-1'));
	e = document.getElementById('cell-1d');
	e.appendChild(createImage('image/wQ.png', 'wQ'));
	e = document.getElementById('cell-1e');
	e.appendChild(createImage('image/wK.png', 'wK'));

	e = document.getElementById('cell-1f');
	e.appendChild(createImage('image/wB.png', 'wB-2'));
	e = document.getElementById('cell-1g');
	e.appendChild(createImage('image/wN.png', 'wN-2'));
	e = document.getElementById('cell-1h');
	e.appendChild(createImage('image/wR.png', 'wR-2'));

	/* for balk army */
	e = document.getElementById('cell-7a');
	e.appendChild(createImage('image/bP.png', 'bP-1'));
	e = document.getElementById('cell-7b');
	e.appendChild(createImage('image/bP.png', 'bP-2'));
	e = document.getElementById('cell-7c');
	e.appendChild(createImage('image/bP.png', 'bP-3'));
	e = document.getElementById('cell-7d');
	e.appendChild(createImage('image/bP.png', 'bP-4'));
	e = document.getElementById('cell-7e');
	e.appendChild(createImage('image/bP.png', 'bP-5'));
	e = document.getElementById('cell-7f');
	e.appendChild(createImage('image/bP.png', 'bP-6'));
	e = document.getElementById('cell-7g');
	e.appendChild(createImage('image/bP.png', 'bP-7'));
	e = document.getElementById('cell-7h');
	e.appendChild(createImage('image/bP.png', 'bP-8'));

	e = document.getElementById('cell-8a');
	e.appendChild(createImage('image/bR.png', 'bR-1'));
	e = document.getElementById('cell-8b');
	e.appendChild(createImage('image/bN.png', 'bN-1'));

	e = document.getElementById('cell-8c');
	e.appendChild(createImage('image/bB.png', 'bB-1'));
	e = document.getElementById('cell-8d');
	e.appendChild(createImage('image/bQ.png', 'bQ'));
	e = document.getElementById('cell-8e');
	e.appendChild(createImage('image/bK.png', 'bK'));

	e = document.getElementById('cell-8f');
	e.appendChild(createImage('image/bB.png', 'bB-2'));
	e = document.getElementById('cell-8g');
	e.appendChild(createImage('image/bN.png', 'bN-2'));
	e = document.getElementById('cell-8h');
	e.appendChild(createImage('image/bR.png', 'bR'));

}

/**
 * setCurrTag
 * 
 * @param ev
 */
function setCurrTag(ev) {
	currTag = null;
	var target = ev.target || ev.srcElement;
	currTag = target.id;
	document.getElementById("demo").innerHTML = currTag;
}
/**
 * function catch mouse event
 * 
 */
var dcID; // mouse down cellID
var ucID; // mouse up cellID
var diID; // mouse down imageID
var uiID;// mouse up imageID
var diID;// mouse drag imageID
function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {

	diID = ev.target.id;
	ev.dataTransfer.setData("picture", ev.target.id);
}

function drop(ev) {

	ev.preventDefault();

	var data = ev.dataTransfer.getData("picture");
	var tmp = ev.target;
	if (tmp.localName.indexOf("img") >= 0) {
		if (diID == tmp.id)
			return;
		var parent = tmp.parentElement;
		parent.removeChild(tmp);
		parent.appendChild(document.getElementById(diID));
		return;
	}
	ev.target.appendChild(document.getElementById(diID));

}
/**
 * 
 * @param ev
 */
function mouseDown(ev) {
	// ev.preventDefault();
	target = ev.target || ev.srcElement;
	if (target.localName.indexOf("img") >= 0) {
		diID = target.id;
		dcID = target.parentElement.id;
		document.getElementById("demo1").innerHTML = 'mouse down' + diID + '  '
				+ dcID;
		return;
	}
	diID = null;
	dcID = target.id;
	uiID = null;
	ucID = null;
	document.getElementById("demo1").innerHTML = 'mouse down' + dcID;
}
/**
 * 
 * @param ev
 */
function mouseup(ev) {
	// ev.preventDefault();
	target = ev.target || ev.srcElement;
	if (target.localName.indexOf("img") >= 0) {
		uiID = target.id;
		ucID = target.parentElement.id;
		document.getElementById("demo2").innerHTML = 'mouse up' + uiID + '  '
				+ ucID;
		return;
	}
	uiID = null;
	ucID = target.id;
	document.getElementById("demo2").innerHTML = 'mouse up' + ucID;

}
// check condition
/**
 * point class: x vertical position, y horizontal position
 */
function Point(x, y) {
	this.X = x;
	this.Y = y;
}
/**
 * chessman class
 */
function Chessman(color, type) {
	// p - 1, R - 2, K - 3, B-4, Q-5, k-6
	this.color = color;
	this.type = type;
}
/**
 * @param cellID
 * @returns
 */
function getCoordirationByCellId(cellID) {
	var i, j;

	for (i = 1; i < 9; i++)
		for (j = 1; j < 9; j++) {
			if (cb[i][j] == cellID) {
				// return i * 10 + j;
				return new Point(i, j);
			}
		}
	return null;
}

function getCellIdByCorrdiration(point) {
	return cb[point.X][point.Y];
}
function hasChild(point) {
	var e = document.getElementById(getCellIdByCorrdiration(point));
	if (e.childNodes.length == 0)
		return false;
	return true;
}
function getPossibleMoveOfPawn(color, x, y) {
	var mlist = new Array();
	if (color == "w") {
		if (x == 2) {
			mlist.push(new Point(3, y));
			mlist.push(new Point(4, y));
			return mlist;
		}
		if (x + 1 <= 8) {
			mlist[0] = new Point(x + 1, y);
			if (y + 1 <= 8 && hasChild(new Point(x + 1, y + 1))) {
				mlist.push(Point(x + 1, y + 1));
			}
			if (y - 1 >= 1 && hasChild(new Point(x + 1, y - 1))) {
				mlist.push(Point(x + 1, y + 1));
			}
		}
		// return null;
	}
	if (color == "b") {
		if (x == 7) {
			mlist.push(new Point(6, y));
			mlist.push(new Point(5, y));
			return mlist;
		}
		if (x + 1 <= 1) {
			mlist[0] = new Point(x - 1, y);
			if (y + 1 <= 8 && hasChild(new Point(x - 1, y + 1))) {
				mlist.push(new Point(x - 1, y + 1));
			}
			if (y - 1 >= 1 && hasChild(new Point(x - 1, y + 1))) {
				mlist.push(new Point(x - 1, y - 1));
			}
		}
		// return null;
	}
	return mlist;
}
function getPossibleMoveOfKnight(x, y) {
	var mlist = new Array();
	if ((x + 2) <= 8 && (y + 1) <= 8)
		mlist.push(new Point(x + 2, y + 1));
	if ((x + 2) <= 8 && (y - 1) >= 1)
		mlist.push(new Point(x + 2, y - 1));
	if ((x - 2) >= 1 && (y + 1) <= 8)
		mlist.push(new Point(x - 2, y + 1));
	if ((x - 2) >= 1 && (y - 1) >= 1)
		mlist.push(new Point(x - 2, y - 1));

	if ((y + 2) <= 8 && (x + 1) <= 8)
		mlist.push(new Point(x + 1, y + 2));
	if ((y + 2) <= 8 && (x - 1) >= 1)
		mlist.push(new Point(x - 1, y + 2));
	if ((y - 2) >= 1 && (x + 1) <= 8)
		mlist.push(new Point(x + 1, y - 2));
	if ((y - 2) >= 1 && (x - 1) >= 1)
		mlist.push(new Point(x - 1, y - 2));
	return mlist;
}
function getPossibleMoveOfBishop(x, y) {
	var mlist = new Array();
	var i, j;
	for (i = 1; i <= 8; i++) {
		for (j = 1; j <= 8; j++) {
			if ((Math.abs(x - i) == Math.abs(y - j)) && (x != i && y != j))
				mlist.push(new Point(i, j));
		}
	}
	return mlist;
}
function getPosibleMoveOfRook(x, y) {
	var mlist = new Array();
	for (i = 1; i <= 8; i++) {
		for (j = 1; j <= 8; j++) {
			if (((x - i) == 0 || (y - j) == 0))
				if (!(i == x && j == y))
					mlist.push(new Point(i, j));
		}
	}
	return mlist;
}
function getPossibleMoveOfKing(x, y) {
	var mlist = new Array();
	if (x - 1 >= 1)
		mlist.push(new Point(x - 1, y));
	if (x + 1 <= 8)
		mlist.push(new Point(x + 1, y));
	if (y - 1 >= 1)
		mlist.push(new Point(x, y - 1));
	if (y + 1 <= 8)
		mlist.push(new Point(x, y + 1));
	if (x - 1 >= 1 && y - 1 >= 1)
		mlist.push(new Point(x - 1, y - 1));
	if (x - 1 >= 1 && y + 1 <= 8)
		mlist.push(new Point(x - 1, y + 1));
	if (x + 1 >= 1 && y - 1 >= 1)
		mlist.push(new Point(x + 1, y - 1));
	if (x + 1 >= 1 && y + 1 <= 8)
		mlist.push(new Point(x + 1, y + 1));
	return mlist;
}

function getPossibleMoveOfQueen(x, y) {
	var mlist = new Array();
	var tmpList;
	var i;
	mlist = getPosibleMoveOfRook(x, y);
	tmpList = getPossibleMoveOfBishop(x, y);
	for (i = 0; i < tmpList.length; i++) {
		mlist.push(tmpList[i]);
	}
	return mlist;
}
function getChessmanBychessmanID(chessmanID) {
	var res = chessmanID.split('');
	return new Chessman(res[0], res[1]);
}
function getMove(chessmanID, cellID) {
	var chessman = getChessmanBychessmanID(chessmanID);
	var point = getCoordirationByCellId(cellID);
	var mList = null;
	switch (chessman.type) {
	case 'P':
		mList = getPossibleMoveOfPawn(chessman.color, point.X, point.Y);
		break;
	case 'R':
		mList = getPosibleMoveOfRook(point.X, point.Y);
		break;
	case 'K':
		mList = getPossibleMoveOfKing(point.X, point.Y);
		break;
	case 'B':
		mList = getPossibleMoveOfBishop(point.X, point.Y);
		break;
	case 'Q':
		mList = getPossibleMoveOfQueen(point.X, point.Y);
		break;
	case 'N':
		mList = getPossibleMoveOfKnight(point.X, point.Y);
		break;
	default:
		break;
	}
	return mList;
}
function appendCSSclassByTagId(tagId, className) {
	var e = document.getElementById(tagId);
	e.className += ' ' + className;
}
function show(ev) {
	var target = ev.target || ev.srcElement;
	if (target.localName == 'img') {
		var i;
		var mList = getMove(target.id, target.parentElement.id);
		for (i = 0; i < mList.length; i++) {
			appendCSSclassByTagId(getCellIdByCorrdiration(mList[i]),
					'cell-color');
		}
		// alert(target.id);
	}
}