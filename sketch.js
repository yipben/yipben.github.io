if ($(window).width() > 800) {    
    var e = document.getElementById('target');
    var e_loc = e.getBoundingClientRect();
    console.log(e_loc)

    var s = document.querySelector('.current');
    var s_loc = s.getBoundingClientRect();

    var v_dist = e_loc.top - s_loc.bottom;
    var h_dist = s_loc.right - e_loc.x + 100


    function setup() {
        canvas = createCanvas(windowWidth, windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        test = new DotConnector(s_loc, e_loc);
    }


    function windowResized() {
       if ($(window).width() > 800) {
         e_loc = e.getBoundingClientRect();
         s_loc = s.getBoundingClientRect();
         resizeCanvas(windowWidth, windowHeight);
         test = new DotConnector(s_loc, e_loc);
       } else {
          remove();
       }
    }

    function draw() {
        test.display();
        test.next();
    }

    function DotConnector(s, e) {
        this.x_start = s.right;
        this.y_start = s.top;
        this.x_end = e.x + e.width / 2;
        this.y_end = e.top;
        this.x = this.x_start;
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
} else {
    // do nothing
}
  