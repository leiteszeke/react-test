// Dependencies
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
	document: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	},
  page: {
		padding: 25,
		flexWrap: 'wrap',
		flexDirection: 'row',
		backgroundColor: '#E4E4E4',
		justifyContent: 'space-around'
  },
  card: {
		alignContent: 'flex-start',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 8,
		flexWrap: 'wrap',
		height: 175,
		overflow: 'hidden',
		marginBottom: 25,
		padding: 8,
		width: 125
	},

	title: {
    textAlign: 'center',
		fontSize: 18,
		marginBottom: 6,
		width: '100%',
  },

  text: {
    fontSize: 10,
    textAlign: 'left',
    wordBreak: 'break-word',
		width: '100%',
  }
});

// Create Document Component
const PrintCards = ({ cards }) => (
  <Document style={styles.document}>
    <Page size="A4" style={styles.page}>
			{cards.map(card => (
				<View key={card.id} style={styles.card}>
					<Text style={styles.title}>{card.name}</Text>
					<Text style={styles.text}>{card.description}</Text>
				</View>
			))}
    </Page>
  </Document>
);

export default PrintCards;