<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Star Rating</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .star { font-size: 30px; color: #ccc; cursor: pointer; }
    .selected { color: gold; }
  </style>
</head>
<body>

  <div class="stars">
    <span class="star" data-value="1">&#9733;</span>
    <span class="star" data-value="2">&#9733;</span>
    <span class="star" data-value="3">&#9733;</span>
    <span class="star" data-value="4">&#9733;</span>
    <span class="star" data-value="5">&#9733;</span>
  </div>
  <div class="rating-result">Your Rating: 0 stars</div>

  <script>
    $(document).ready(function() {
      $(".star").click(function() {
        var rating = $(this).data("value");
        $(".star").removeClass("selected");
        $(this).prevAll().addBack().addClass("selected");
        $(".rating-result").text("Your Rating: " + rating + " stars");
      });
    });
  </script>

</body>
</html>
