define( [], function() {
	var view = Marionette.ItemView.extend({
		tagName: 'div',
		template: '#nf-tmpl-main-content-field',

		onRender: function() {
			this.$el = this.$el.children();
			this.$el.unwrap();
			this.setElement( this.$el );

			// jQuery( this.el ).hide();
		},

		onShow: function() {
			// jQuery( this.el ).fadeIn( 'fast' );
		},

		events: {
			'click .nf-edit-settings': 'clickEditField',
			'click .nf-delete': 'clickDeleteField',
			'click .nf-duplicate': 'clickDuplicateField'
		},

		clickEditField: function( e ) {
			nfRadio.channel( 'fields' ).trigger( 'click:editField', e, this.model );
		},

		clickDeleteField: function( e ) {
			nfRadio.channel( 'fields' ).trigger( 'click:deleteField', e, this.model );
		},

		clickDuplicateField: function( e ) {
			nfRadio.channel( 'fields' ).trigger( 'click:duplicateField', e, this.model );
		}

	});

	return view;
} );