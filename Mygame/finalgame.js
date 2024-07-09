var start = new Date().getTime();

            function shapeAppear() {
                var top = Math.random() * 550;
                var left = Math.random() * 550;
                var width = Math.random() * 150 + 50;  // Minimum size to avoid being too small
                var height = Math.random() * 150 + 50; // Minimum size to avoid being too small
                var randomColor = Math.floor(Math.random() * 16777215).toString(16);

                if (Math.random() > 0.5) {
                    document.getElementById("shape").style.borderRadius = "50%";
                } else {
                    document.getElementById("shape").style.borderRadius = "0%";
                }

                document.getElementById("shape").style.width = width + "px";
                document.getElementById("shape").style.height = height + "px";
                document.getElementById("shape").style.top = top + "px";
                document.getElementById("shape").style.left = left + "px";
                document.getElementById("shape").style.display = "block";
                document.getElementById("shape").style.backgroundColor = "#" + randomColor;

                start = new Date().getTime();
            }

            setTimeout(shapeAppear, Math.random() * 1000);

            document.getElementById("shape").onclick = function() {
                document.getElementById("shape").style.display = "none";
                var end = new Date().getTime();
                var time = (end - start) / 1000;
                document.getElementById("time").innerHTML = time + "s";
                setTimeout(shapeAppear, Math.random() * 1000);
            }