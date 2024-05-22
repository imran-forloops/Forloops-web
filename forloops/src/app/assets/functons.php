add_action( 'init', function() {
register_post_type( 'docs', [
'show_ui' => true,
'labels' => [
'menu_name' => __( 'Blogs', 'your-textdomain' ),
],
'hierarchical' => false, // Change to false if you don't want parent/child relationships
'show_in_graphql' => true,
'graphql_single_name' => 'Blog', // Singular name used in GraphQL schema
'graphql_plural_name' => 'Blogs', // Plural name used in GraphQL schema
'public' => true,
'publicly_queryable' => true,
'supports' => [ 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ], // Customize supported features
] );
} );