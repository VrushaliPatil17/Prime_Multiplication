'use strict'

function colSize(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].toString().length)
    }, 0);
  });
};

function contentPadding(content, width) {
  var result = "";
  var padding = width - content.toString().length;
  for (var i = 0; i < padding; i++) {
    result += " ";
  }
  result += content;
  return result;
};

exports.createTable = function(rows) {
  var widths = colSize(rows);

  function drawRows(row, index) {
    var box = row.map(function(cell, colNum) {
      return contentPadding(cell, widths[colNum])
    }).join(" ");
    return box;
  }

  return rows.map(drawRows).join('\n');
}