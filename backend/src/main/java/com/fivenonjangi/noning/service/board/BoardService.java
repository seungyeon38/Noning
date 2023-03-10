package com.fivenonjangi.noning.service.board;

import com.fivenonjangi.noning.data.dto.board.BoardRequestDTO;
import com.fivenonjangi.noning.data.dto.board.BoardResponseDTO;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public interface BoardService {
    void writeBoard(BoardRequestDTO boardRequestDTO, long userId) throws Exception;
    void deleteBoard(long userId, long boardId) throws Exception;
    BoardResponseDTO getBoard(long userId, long boardId);
    List<BoardResponseDTO> getBoardList(long userId, String categoryCode);
    List<BoardResponseDTO> getBoardListByUserId(long userId);
    void vote(long boardId, long userId, byte vote, LocalDateTime now) throws Exception;
    Map<String, Integer> betray(long boardId, long userId, byte vote, LocalDateTime now) throws Exception;
    void like(long boardId, long userId, LocalDateTime now) throws Exception;
    void unlike(long boardId, long userId) throws Exception;
    List<BoardResponseDTO> getFlowList(long userId);
}
