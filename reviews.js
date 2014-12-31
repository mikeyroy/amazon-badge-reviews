(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54247505-1', 'auto');
ga('send', 'pageview');

$(function() {
	'use strict';

	var asin = location.pathname.split('/')[3];

	if (!asin) {
		return;
	}

	var url = 'http://www.mikepearce.us/api/aws/' + asin + '/reviews';

	function getReviewsContainer() {
		var reviewContainerIds = ['#reviewsDivider', '#revDivider', '#customerReviews'];

		var $container;

		for (var i = 0; i < reviewContainerIds.length; i += 1) {
			$container = $(reviewContainerIds[i]);

			if ($container.length) {
				break;
			}
		}

		return $container;
	}

	var $reviewsContainer = getReviewsContainer();

	$reviewsContainer.before('<div id="honest-amazon-extension" class="ha-container loading"></div>');

	var $honestAmazon = $('#honest-amazon-extension');

	$.get(url, function(response) {
		$honestAmazon
			.removeClass('loading')
			.html(response);

		$('#honest-amazon-code .nav-tabs a').click(function(evt) {
			evt.preventDefault();
			$(this).tab('show');
			$honestAmazon.find('.tab-content').scrollTop(0);
		});

		if ($honestAmazon.find('#ha-noResults').length) {
			$honestAmazon.addClass('noResults');
		} else {
			$('.reviewText').next().hide();
		}
	})
	.fail(function() {
		$honestAmazon.hide();
	});
});