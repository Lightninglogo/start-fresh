for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {

      document.write(j + "*" + i + '=' + i * j + '&nbsp;&nbsp;&nbsp;')
      if (i == j) {
        document.write("<br/>")
      }

    }
}