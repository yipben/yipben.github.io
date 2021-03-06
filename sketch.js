var smallScreen = $(window).width() < 800;

// reload window when increasing window size above threshold
$(window).resize(function() {
    var cw = $(window).width();
    if (cw < 800) {
        smallScreen = true;
    }
    if (cw > 800 & smallScreen) {
        location.reload();
    }
})

if ($(window).width() > 800) {    
    var e = document.getElementById('target');
    var e_loc = e.getBoundingClientRect();

    var s = document.querySelector('.current');
    var s_loc = s.getBoundingClientRect();

    function setup() {
        canvas = createCanvas($(window).width(), windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        current = new DotConnector(s_loc, e_loc);
    }

    function windowResized() {
       if ($(window).width() > 800) {
         e_loc = e.getBoundingClientRect();
         s_loc = s.getBoundingClientRect();
         resizeCanvas($(window).width(), windowHeight);
         current = new DotConnector(s_loc, e_loc);
       } else {
          remove();
       }
    }

    function draw() {
        current.display();
        current.next();
    }

    function DotConnector(s, e) {

        this.x_end = e.x + e.width / 2;
        this.y_end = e.top;
        this.x = s.right;
        this.y = s.bottom + 2;

        this.display = function() {
            strokeWeight(2);
            point(this.x, this.y);
        }

        this.next = function() {
            if (this.x >= s.left) {
                line(s.right, s.bottom + 2, s.left, s.bottom + 2);
                this.x = s.left - 1;
            } else if (this.x >= this.x_end) {
                this.x += -6;
            } else if (this.y <= this.y_end) {
                this.y += 6;
            }
        }
    }  
} 

