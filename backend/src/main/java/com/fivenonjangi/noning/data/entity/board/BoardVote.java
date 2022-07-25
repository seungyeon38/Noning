package com.fivenonjangi.noning.data.entity.board;

import com.fivenonjangi.noning.data.dto.board.BoardVoteDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "board_vote")
public class BoardVote {
    @Id
    @Column(name = "board_vote_id")
    long id;
    boolean vote;
    @Column(name = "board_id")
    long boardId;
    @Column(name = "user_id")
    long userId;
    LocalDateTime reg;

    public BoardVoteDTO toDto() {
        return BoardVoteDTO.builder()
                .id(id)
                .vote(vote)
                .boardId(boardId)
                .userId(userId)
                .reg(reg)
                .build();
    }
}

